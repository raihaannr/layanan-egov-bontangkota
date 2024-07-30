import { prisma } from "@/lib/prisma";

export const getPemesanan = async () => {
  try {
    const result = await prisma.pemesanan.findMany({
      orderBy: { createdAt: "desc" },
    });
    return result;
  } catch (error) {
    throw new Error("Failed to fetch data");
  }
};

export const getPemesananById = async (id: string) => {
  try {
    const result = await prisma.pemesanan.findUnique({
      where: { id },
      include: { user: true } // Include user data
    });
    return result;
  } catch (error) {
    throw new Error("Failed to fetch data");
  }
};

// Fetch all users
export const getUsers = async () => {
  try {
    const users = await prisma.user.findMany({
      orderBy: { createdAt: "desc" },
    });
    return users;
  } catch (error) {
    throw new Error("Failed to fetch users");
  }
};

export const getUsersById = async (id: string) => {
  try {
    const users = await prisma.user.findUnique({
      where: { id },
    });
    return users;
  } catch (error) {
    throw new Error("Failed to fetch users");
  }
};

// Update user role
export const updateUserRole = async (id: string, role: string) => {
  try {
    const updatedUser = await prisma.user.update({
      where: { id },
      data: { role },
    });
    return updatedUser;
  } catch (error) {
    throw new Error("Failed to update user role");
  }
};

// Edit user details
export const updateUser = async (id: string, data: { name: string; email: string }) => {
  try {
    const updatedUser = await prisma.user.update({
      where: { id },
      data,
    });
    return updatedUser;
  } catch (error) {
    throw new Error("Failed to update user");
  }
};

// Fetch user count
export const getUserCount = async () => {
  try {
    const count = await prisma.user.count();
    return count;
  } catch (error) {
    throw new Error("Failed to fetch user count");
  }
};

// Fetch Diajukan pemesanan count
export const getDiajukanPemesananCount = async () => {
  try {
    const count = await prisma.pemesanan.count({
      where: { status: "Diajukan" },
    });
    return count;
  } catch (error) {
    throw new Error("Failed to fetch pending pemesanan count");
  }
};