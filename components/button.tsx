"use client";
import { useFormStatus } from "react-dom";
import { clsx } from "clsx";
import Link from "next/link";
import { IoChevronForwardCircleOutline, IoTrashOutline } from "react-icons/io5";
import { deletePemesanan, deleteUser, updateRoleToAdmin, updateRoleToUser, updateStatusToDibatalkan, updateStatusToDiterima, updateStatusToDitolak } from "@/lib/actions";
// import Link from "next/link";
// import { deleteImage } from "@/lib/actions";

export const SubmitButton = ({ label }: { label: string }) => {
  const { pending } = useFormStatus();
  return (
    <button
      className={clsx(
        "bg-sky-950 text-white px-4 py-2 rounded-md xl:bg-sky-950 xl:hover:bg-sky-900 xl:text-white xl:px-4 xl:py-2 xl:rounded-md",
        {
          "opacity-50 cursor-progress": pending,
        }
      )}
      type="submit"
      disabled={pending}
    >
      {label === "buat" ? (
        <>{pending ? "Diajukan..." : "Ajukan"}</>
      ) : (
        <>{pending ? "Updating..." : "Update"}</>
      )}
    </button>
  );
};

export const ActionButton = ({ id }: { id: string }) => {
  return (
    <Link
      href={`command-center/action/${id}`}
      className="text-indigo-600 hover:text-indigo-900">
        <IoChevronForwardCircleOutline size={20} />
    </Link>
  );
};

export const ActionButtonUser = ({ id }: { id: string }) => {
  return (
    <Link
      href={`users/action/${id}`}
      className="text-indigo-600 hover:text-indigo-900">
        <IoChevronForwardCircleOutline size={20} />
    </Link>
  );
};

export const DeleteButton = ({ id }: { id: string }) => {
  const deletePemesananWithId = deletePemesanan.bind(null, id);
  return (
    <form
      action={deletePemesananWithId}
    >
      <DeleteBtn />
    </form>
  );
};

export const DeleteButtonUser = ({ id }: { id: string }) => {
  const deleteUserWithId = deleteUser.bind(null, id);
  return (
    <form
      action={deleteUserWithId}
    >
      <DeleteBtn />
    </form>
  );
};

const DeleteBtn = () => {
  const { pending } = useFormStatus();
  return (
    <button type="submit" disabled={pending} className="bg-sky-900 hover:bg-sky-950 p-1 rounded-lg">
      {pending ? " " : <IoTrashOutline color="white" size={18}/>}
    </button>
  );
};

export const UpdateButton = ({ id }: { id: string }) => {
  const updateStatusWithId = updateStatusToDiterima.bind(null, id);
  return (
    <form action={updateStatusWithId}>
      <UpdateBtn />
    </form>
  );
};

const UpdateBtn = () => {
  const { pending } = useFormStatus();
  return (
    <button
      type="submit"
      disabled={pending}
      className={clsx(
        "flex-1 min-w-full min-h-full rounded-md border border-transparent shadow-sm px-4 py-2 bg-green-600 text-base font-medium text-white hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 sm:ml-3 sm:w-auto sm:text-sm sm:justify-start",
        {
          "opacity-50 cursor-progress": pending,
        }
      )}
    >
      {pending ? "Disetujui" : "Setujui"}
    </button>
  );
};

export const RejectButton = ({ id }: { id: string }) => {
  const rejectStatusWithId = updateStatusToDitolak.bind(null, id);
  return (
    <form action={rejectStatusWithId}>
      <RejectBtn />
    </form>
  );
};

const RejectBtn = () => {
  const { pending } = useFormStatus();
  return (
    <button
      type="submit"
      disabled={pending}
      className={clsx(
        "min-w-full justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-red-600 text-base font-medium text-white hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm sm:justify-start",
        {
          "opacity-50 cursor-progress": pending,
        }
      )}
    >
      {pending ? "Ditolak" : "Tolak"}
    </button>
  );
};

export const CancelButton = ({ id }: { id: string }) => {
  const cancelStatusWithId = updateStatusToDibatalkan.bind(null, id);
  return (
    <form action={cancelStatusWithId}>
      <CancelBtn />
    </form>
  );
};

const CancelBtn = () => {
  const { pending } = useFormStatus();
  return (
    <button
      type="submit"
      disabled={pending}
      className={clsx(
        "min-w-full justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-gray-600 text-base font-medium text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm sm:justify-start",
        {
          "opacity-50 cursor-progress": pending,
        }
      )}
    >
      {pending ? "Dibatalkan" : "Batalkan"}
    </button>
  );
};

export const ToAdminButton = ({ id }: { id: string }) => {
  const changeRoleToAdmin = updateRoleToAdmin.bind(null, id);
  return (
    <form action={changeRoleToAdmin}>
      <ToAdminBtn />
    </form>
  );
};

const ToAdminBtn = () => {
  const { pending } = useFormStatus();
  return (
    <button
      type="submit"
      disabled={pending}
      className={clsx(
        "min-w-full justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-sky-900 text-base font-medium text-white hover:bg-sky-950 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-sky-950 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm sm:justify-start",
        {
          "opacity-50 cursor-progress": pending,
        }
      )}
    >
      {pending ? "Admin..." : "Admin"}
    </button>
  );
};

export const ToUserButton = ({ id }: { id: string }) => {
  const changeRoleToUser = updateRoleToUser.bind(null, id);
  return (
    <form action={changeRoleToUser}>
      <ToUserBtn />
    </form>
  );
};

const ToUserBtn = () => {
  const { pending } = useFormStatus();
  return (
    <button
      type="submit"
      disabled={pending}
      className={clsx(
        "min-w-full justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-sky-100 text-base font-medium hover:bg-sky-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-sky-950 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm sm:justify-start",
        {
          "opacity-50 cursor-progress": pending,
        }
      )}
    >
      {pending ? "User..." : "User"}
    </button>
  );
};