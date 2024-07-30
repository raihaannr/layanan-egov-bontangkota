import type { Pemesanan } from "@prisma/client";
import formatDateToID from "@/lib/format-date";
import { IoDocumentTextOutline, IoChevronBack } from "react-icons/io5";
import Link from "next/link";
import Image from "next/image";
import { CancelButton, DeleteButton, RejectButton, UpdateButton } from "./button";

interface DetailActionProps {
  data: Pemesanan & { user: { name: string } | null }; // Handle nullable user
}

const DetailAction: React.FC<DetailActionProps> = ({ data }) => {
  return (
    <div className="xl:relative xl:min-h-screen">
      <div className="pt-20 xl:pt-20 xl:max-w-7xl xl:mx-auto">
        <div className="mx-5 text-neutral-500 hover:text-neutral-600 w-fit xl:mx-5 xl:text-neutral-500 xl:hover:text-neutral-600 xl:mb-4 xl:w-fit">
          <Link href="/dashboard-admin/command-center" className="flex items-end xl:flex xl:items-end">
            <IoChevronBack size={20} />
            <p className="text-sm">List Peminjaman</p>
          </Link>
        </div>
        <div className="rounded-xl p-5 m-5 border-2 bg-white border-neutral-100 shadow-xl xl:max-w-7xl xl:mx-auto xl:rounded-xl xl:p-5 xl:m-5 xl:border-2 xl:bg-white xl:border-neutral-100 xl:shadow-xl">
          <div className="xl:grid xl:grid-cols-3 xl:grid-rows-1 xl:gap-4">
            <div className="grid grid-cols-2 border-b-2 border-b-neutral-100 pb-4 xl:border-b-0 xl:border-b-neutral-100 xl:pb-4 xl:col-span-2 xl:grid xl:grid-cols-2 xl:grid-auto-rows xl:border-r-2 xl:border-r-neutral-100">
              <h1 className="col-span-2 text-lg font-bold xl:col-span-2 xl:text-lg xl:font-bold">Detail Peminjaman</h1>
              <p className="text-xs font-medium text-gray-500 xl:text-xs xl:font-medium xl:text-gray-500">{data.user?.name || 'No User'}</p> {/* Display user name or fallback */}
              <div className="col-span-2 grid grid-cols-2 grid-rows-1 w-auto mt-4 xl:col-span-2 xl:grid xl:grid-cols-2 xl:grid-rows-1 xl:w-auto xl:mt-4">
                <div>
                <h2 className="text-xs font-medium text-gray-500 mt-2 xl:text-xs xl:font-medium xl:text-gray-500 xl:mt-2">Nama Pemohon</h2>
                  <p className="text-sm">{data.pemohon}</p>
                  <h2 className="text-xs font-medium text-gray-500 mt-2 xl:text-xs xl:font-medium xl:text-gray-500 xl:mt-2">Instansi</h2>
                  <p className="text-sm">{data.instansi}</p>
                  <h2 className="text-xs font-medium text-gray-500 mt-2 xl:text-xs xl:font-medium xl:text-gray-500 xl:mt-2">Ruangan</h2>
                  <p className="text-sm">{data.ruangan}</p>
                  <h2 className="text-xs font-medium text-gray-500 mt-2 xl:text-xs xl:font-medium xl:text-gray-500 xl:mt-2">Keperluan</h2>
                  <p className="text-sm">{data.keperluan}</p>
                </div>
                <div>
                  <h2 className="text-xs font-medium text-gray-500 mt-2 xl:text-xs xl:font-medium xl:text-gray-500 xl:mt-2">Waktu Peminjaman</h2>
                  <p className="text-sm">{formatDateToID(data.pinjam)}</p>
                  <h2 className="text-xs font-medium text-gray-500 mt-2 xl:text-xs xl:font-medium xl:text-gray-500 xl:mt-2">Waktu Selesai</h2>
                  <p className="text-sm">{formatDateToID(data.selesai)}</p>
                  <h2 className="text-xs font-medium text-gray-500 mt-2 xl:text-xs xl:font-medium xl:text-gray-500 xl:mt-2">Surat Permohonan</h2>
                  <p className="w-fit xl:w-fit">
                    <Link href={data.surat} className="text-sky-700 hover:text-sky-950 w-fit xl:text-sky-700 xl:hover:text-sky-950 xl:w-fit">
                      <IoDocumentTextOutline size={25} />
                    </Link>
                  </p>
                </div>
              </div>
            </div>
            <div className="xl:flex xl:flex-col xl:justify-between mt-4 xl:mt-0">
              <div className="flex justify-end xl:flex xl:justify-end">
                <DeleteButton id={data.id} />
              </div>
              <div className="">
                <p className="text-3xl font-bold text-center p-5 text-gray-600 xl:text-3xl xl:font-bold xl:text-center xl:p-5 xl:text-gray-600">{data.status}</p>
              </div>
              <div className="xl:bg-gray-50 xl:px-4 xl:py-3 xl:sm:px-6 xl:flex xl:h-1/3 xl:justify-center">
                <div className="xl:flex-1 xl:px-2 mt-4 xl:mt-0">
                  <UpdateButton id={data.id} />
                </div>
                <div className="xl:flex-1 xl:px-2 mt-4 xl:mt-0">
                  <RejectButton id={data.id} />
                </div>
                <div className="xl:flex-1 xl:px-2 mt-4 xl:mt-0">
                  <CancelButton id={data.id} />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='xl:block hidden xl:absolute xl:-bottom-28 xl:-right-10 xl:content-center xl:-z-10'>
          <Image
            src="/icon.png"
            width={500}
            height={500}
            alt="Burung Kuntul Perak"
          />
        </div>
      </div>
    </div>
  );
}

export default DetailAction;
