'use server'
import { prisma } from "@/lib/prisma";
import { del, put } from "@vercel/blob";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { z } from "zod";
import { getPemesananById, getUsersById } from "./data";
import { getServerSession } from "next-auth";
import { authOptions } from "./auth";
import { Pemesanan, User } from "@prisma/client";

const UploadSchema = z.object({
    pemohon: z.string().min(1, { message: "Must be 1 or more characters long" }),
    instansi: z.string().min(1, { message: "Must be 1 or more characters long" }),
    ruangan: z.string().min(1, { message: "Must be 1 or more characters long" }),
    keperluan: z.string().min(5, { message: "Must be 5 or more characters long" }),
    pinjam: z.string().min(5, { message: "tidak boleh kosong" }),
    selesai: z.string().min(5, { message: "tidak boleh kosong" }),
    surat: z
      .instanceof(File) // Ensure file is a File object
      .refine((file) => file.size > 0, { message: "File tidak boleh kosong. " }) // Validate file size
      .refine(
        (file) => file.size === 0 || ["application/pdf", "application/vnd.openxmlformats-officedocument.wordprocessingml.document"].includes(file.type),
        { message: "Hanya file PDF dan Doc yang diizinkan" }
      ) // Validate file type
      .refine((file) => file.size < 4000000, {
        message: "image must less than 4MB"
      }),
    status: z.string().min(1, { message: "Must be 1 or more characters long" })
});

export const uploadPermohonan = async (prevState: unknown, formData: FormData) => {
  // Get the session
  const session = await getServerSession(authOptions);

  // Ensure user is authenticated
  const userId = (session?.user as { id: string })?.id;
  if (!userId) {
    return { message: "User is not authenticated" };
  }

  const validatedFields = UploadSchema.safeParse(
    Object.fromEntries(formData.entries())
  );

  if (!validatedFields.success) {
    return {
      error: validatedFields.error.flatten().fieldErrors,
    };
  }

  const { pemohon, instansi, ruangan, keperluan, pinjam, selesai, surat, status } = validatedFields.data;

  // Convert pinjam and selesai to Date objects
  const pinjamDate = new Date(pinjam);
  const selesaiDate = new Date(selesai);

  if (isNaN(pinjamDate.getTime()) || isNaN(selesaiDate.getTime())) {
    return {
      error: {
        pinjam: ["Invalid date format"],
        selesai: ["Invalid date format"]
      }
    };
  }

  const { url } = await put(surat.name, surat, {
    access: "public",
    multipart: true,
  });

  try {
    await prisma.pemesanan.create({
      data: {
        pemohon,
        instansi,
        ruangan,
        keperluan,
        pinjam: pinjamDate,
        selesai: selesaiDate,
        surat: url,
        status,
        userId, // Associate the user ID
      },
    });
  } catch (error) {
    return { message: "Failed to create data" };
  }

  revalidatePath("/command-center/pengajuan-layanan/status");
  redirect("/command-center/pengajuan-layanan/status");
};

export const getUserPemesanan = async () => {
  // Get the session
  const session = await getServerSession(authOptions);

  // Ensure user is authenticated
  const userId = (session?.user as { id: string })?.id;
  if (!userId) {
    return { message: "User is not authenticated" };
  }

  try {
    const pemesananList = await prisma.pemesanan.findMany({
      where: { userId },
      orderBy: { createdAt: 'desc' },
    });
    return { pemesananList };
  } catch (error) {
    return { message: "Failed to retrieve data" };
  }
};

async function checkAdminRole() {
  const session = await getServerSession(authOptions);
  if (!session || session.user.role !== "admin") {
    throw new Error("Unauthorized: Admin role required");
  }
}

export const getAllUsers = async (): Promise<{ users: User[]; message?: string }> => {
  await checkAdminRole();

  try {
    const users = await prisma.user.findMany({
      orderBy: { createdAt: 'desc' },
    });
    return { users };
  } catch (error) {
    return { users: [], message: "Failed to retrieve users" };
  }
};

export const getAllPemesanan = async (): Promise<{ pemesanan: Pemesanan[]; message?: string }> => {
  await checkAdminRole();

  try {
    const pemesanan = await prisma.pemesanan.findMany({
      orderBy: { createdAt: 'desc' },
      include: {
        user: true, // Include the related user data if needed
      },
    });
    return { pemesanan };
  } catch (error) {
    return { pemesanan: [], message: "Failed to retrieve pemesanan" };
  }
};

export const getUserCount = async (): Promise<{ count: number; message?: string }> => {
  await checkAdminRole();

  try {
    const count = await prisma.user.count();
    return { count };
  } catch (error) {
    return { count: 0, message: "Failed to retrieve user count" };
  }
};

export const getPendingPemesananCount = async (): Promise<{ count: number; message?: string }> => {
  await checkAdminRole();

  try {
    const count = await prisma.pemesanan.count({
      where: {
        status: 'Diajukan', // Assuming 'Diajukan' means pending
      },
    });
    return { count };
  } catch (error) {
    return { count: 0, message: "Failed to retrieve pending pemesanan count" };
  }
};

export const updateStatusToDiterima = async (id: string) => {
  await checkAdminRole();

  const data = await getPemesananById(id);
  if (!data) return { message: "No data found" };

  try {
    await prisma.pemesanan.update({
      where: { id },
      data: { status: "Disetujui" },
    });
  } catch (error) {
    return { message: "Failed to update status" };
  }

  revalidatePath("/dashboard-admin/command-center");
  redirect("/dashboard-admin/command-center");
};

export const updateStatusToDitolak = async (id: string) => {
  await checkAdminRole();

  const data = await getPemesananById(id);
  if (!data) return { message: "No data found" };

  try {
    await prisma.pemesanan.update({
      where: { id },
      data: { status: "Ditolak" },
    });
  } catch (error) {
    return { message: "Failed to update status" };
  }

  revalidatePath("/dashboard-admin/command-center");
  redirect("/dashboard-admin/command-center");
};

export const updateStatusToDibatalkan = async (id: string) => {
  await checkAdminRole();

  const data = await getPemesananById(id);
  if (!data) return { message: "No data found" };

  try {
    await prisma.pemesanan.update({
      where: { id },
      data: { status: "Dibatalkan" },
    });
  } catch (error) {
    return { message: "Failed to update status" };
  }

  revalidatePath("/dashboard-admin/command-center");
  redirect("/dashboard-admin/command-center");
};

// Delete Image
export const deletePemesanan = async (id: string) => {
  await checkAdminRole();
  
  const data = await getPemesananById(id);
  if (!data) return { message: "No data found" };

  await del(data.surat);
  try {
    await prisma.pemesanan.delete({
      where: { id },
    });
  } catch (error) {
    return { message: "Failed to delete data" };
  }

  revalidatePath("/dashboard-admin/command-center");
  redirect("/dashboard-admin/command-center");
};

export const updateRoleToAdmin = async (id: string) => {
  await checkAdminRole();

  const data = await getUsersById(id);
  if (!data) return { message: "No data found" };

  try {
    await prisma.user.update({
      where: { id },
      data: { role: "admin" },
    });
  } catch (error) {
    return { message: "Failed to update status" };
  }

  revalidatePath("/dashboard-admin/users");
  redirect("/dashboard-admin/users");
};

export const updateRoleToUser = async (id: string) => {
  await checkAdminRole();

  const data = await getUsersById(id);
  if (!data) return { message: "No data found" };

  try {
    await prisma.user.update({
      where: { id },
      data: { role: "user" },
    });
  } catch (error) {
    return { message: "Failed to update status" };
  }

  revalidatePath("/dashboard-admin/users");
  redirect("/dashboard-admin/users");
};

export const deleteUser = async (id: string) => {
  await checkAdminRole();
  
  const data = await getUsersById(id);
  if (!data) return { message: "No data found" };

  try {
    await prisma.user.delete({
      where: { id },
    });
  } catch (error) {
    return { message: "Failed to delete data" };
  }

  revalidatePath("/dashboard-admin/users");
  redirect("/dashboard-admin/users");
};