import type { User } from "@prisma/client";
import { IoChevronBack } from "react-icons/io5";
import Link from "next/link";
import Image from "next/image";
import { DeleteButtonUser, ToAdminButton, ToUserButton } from "./button";

interface DetailActionProps {
  data: User; // Handle nullable user
}

const DetailActionUser: React.FC<DetailActionProps> = ({ data }) => {
  return (
    <div className="relative h-screen xl:relative xl:h-screen">
      <div className="xl:max-w-7xl xl:mx-auto">
        <div className="pt-20 mx-5 text-neutral-500 hover:text-neutral-600 mb-4 w-fit xl:mx-0 xl:pt-20 xl:text-neutral-500 xl:hover:text-neutral-600 xl:mb-4 xl:w-fit">
          <Link href="/dashboard-admin/users" className="flex items-end xl:flex xl:items-end">
            <IoChevronBack size={20} />
            <p className="text-sm xl:text-sm">List Users</p>
          </Link>
        </div>
        <div className="rounded-xl p-5 m-5 border-2 bg-white border-neutral-100 shadow-xl xl:m-0 xl:max-w-7xl xl:mx-auto xl:rounded-xl xl:p-5 xl:border-2 xl:bg-white xl:border-neutral-100 xl:shadow-xl">
          <div className="xl:grid xl:grid-cols-3 xl:grid-rows-1 xl:gap-4">
            <div className="border-b-2 border-b-neutral-100 pb-4 xl:col-span-2 xl:grid xl:grid-cols-2 xl:grid-auto-rows xl:border-r-2 xl:border-r-neutral-100 xl:border-b-0 xl:pb-0">
              <h1 className="text-lg font-bold mb-6 xl:col-span-2 xl:mb-0 xl:text-lg xl:font-bold">Detail User</h1>
              <div className="xl:col-span-2 xl:grid xl:grid-cols-2 xl:grid-rows-1 xl:w-auto xl:mt-4">
                <div>
                  <h2 className="text-xs font-medium text-gray-500 mt-2 xl:text-xs xl:font-medium xl:text-gray-500 xl:mt-2">Nama</h2>
                  <p>{data.name}</p>
                  <h2 className="text-xs font-medium text-gray-500 mt-2 xl:text-xs xl:font-medium xl:text-gray-500 xl:mt-2">Email</h2>
                  <p>{data.email}</p>
                </div>
              </div>
            </div>
            <div className="flex flex-col justify-between pt-4 xl:pt-0 xl:flex xl:flex-col xl:justify-between">
              <div className="flex justify-end xl:flex xl:justify-end">
                <DeleteButtonUser id={data.id} />
              </div>
              <div className="">
                <p className="text-3xl font-bold text-center p-5 text-gray-600 xl:text-3xl xl:font-bold xl:text-center xl:p-5 xl:text-gray-600">{data.role}</p>
              </div>
              <div className="bg-gray-50 px-4 py-3 sm:px-6 flex h-1/3 justify-center xl:bg-gray-50 xl:px-4 xl:py-3 xl:sm:px-6 xl:flex xl:h-1/3 xl:justify-center">
                <div className="flex-1 px-2 xl:flex-1 xl:px-2">
                  <ToUserButton id={data.id} />
                </div>
                <div className="flex-1 px-2 xl:flex-1 xl:px-2">
                  <ToAdminButton id={data.id} />
                </div>
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
          className='xl:w-[500px] xl:h-[500px]' // Ensuring responsive size for the image as well
        />
      </div>
    </div>
  );
}

export default DetailActionUser;
