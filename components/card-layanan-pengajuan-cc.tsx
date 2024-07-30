'use client';
import Link from "next/link";
import { IoLink, IoAddCircle, IoEllipse, IoList } from "react-icons/io5";
import FullCalendarComponent from "./fullcalendar";
import { useState } from "react";
import Modal from "./modal";
import FullCalendarComponentV2 from "./fullcalendarv2";

const CardLayananPengajuanCC: React.FC = () => {
  const [isModalVisible, setIsModalVisible] = useState<boolean>(false);

  const openModal = () => setIsModalVisible(true);
  const closeModal = () => setIsModalVisible(false);

  return (
    <div className="w-full h-auto bg-white shadow-lg mx-auto rounded-2xl px-5 pb-10 pt-5 xl:w-full xl:h-auto xl:bg-white xl:shadow-lg xl:mx-auto xl:rounded-2xl xl:px-10 xl:pb-10 xl:pt-5">
      <h1 className="border-l-4 border-orange-400 pl-4 text-lg font-semibold xl:border-l-4 xl:border-orange-400 xl:pl-4 xl:text-lg xl:font-semibold">
        Command Center
      </h1>
      <div className="xl:ml-4">
        <div className="grid grid-cols-1 grid-auto-rows mt-8 mb-2 gap-y-3 xl:grid xl:grid-flow-row-dense xl:grid-cols-4 xl:grid-rows-1 xl:mt-8 xl:mb-2 xl:gap-3 ">
          <div className="xl:relative xl:grid xl:grid-flow-row-dense xl:grid-cols-1 xl:grid-rows-1 xl:col-span-3 xl:p-4 xl:bg-neutral-100 xl:rounded-md">
            <div className="xl:block hidden xl:relative xl:w-full">
              <FullCalendarComponent />
            </div>
            <div className="xl:hidden xl:relative xl:w-full">
              <FullCalendarComponentV2 />
            </div>
          </div>

          <div className="border-2 border-neutral-100 rounded-md grid grid-auto-rows grid-cols-1 xl:border-2 xl:border-neutral-100 xl:rounded-md">
            <div className="border-t-2 border-t-neutral-100 pt-3 order-last xl:border-t-0 xl:-order-last m-2 xl:m-5">
              <button onClick={openModal} className="bg-sky-800 px-5 py-2 rounded-md flex text-left items-center justify-between w-full xl:bg-sky-800 xl:px-5 xl:py-2 xl:rounded-md xl:flex xl:text-left xl:items-center xl:justify-between xl:w-full">
                <div>
                  <p className="text-white text-xs font-semibold xl:text-white xl:text-xs xl:font-semibold">Link Akses</p>
                  <p className="text-white text-sm xl:text-white xl:text-sm">Buat Pengajuan Layanan</p>
                </div>
                <IoAddCircle color="white" size={30} />
              </button>
              <div className="pt-3">
                <Link href='/command-center/pengajuan-layanan/status'>
                <button className="bg-sky-950 px-5 py-2 rounded-md flex text-left items-center justify-between w-full xl:bg-sky-950 xl:px-5 xl:py-2 xl:rounded-md xl:flex xl:text-left xl:items-center xl:justify-between xl:w-full">
                  <div>
                    <p className="text-white text-xs font-semibold xl:text-white xl:text-xs xl:font-semibold">Link Akses</p>
                    <p className="text-white text-sm xl:text-white xl:text-sm">Cek Layanan Saya</p>
                  </div>
                  <IoList color="white" size={30} />
                </button>
                </Link>
              </div>
            </div>
            <div className="xl:border-t-2 xl:border-neutral-100">
              <div className="m-2 xl:m-5">
                <h2 className="text-sm font-semibold xl:text-sm xl:font-semibold">Keterangan Warna</h2>
                <div className="flex my-2 xl:flex xl:my-2">
                  <IoEllipse color="orange" className="m-2.5 xl:m-2.5" />
                  <h3 className="text-sm p-2 xl:text-sm xl:p-2">Diajukan</h3>
                </div>
                <div className="flex my-2 xl:flex xl:my-2">
                  <IoEllipse color="green" className="m-2.5 xl:m-2.5" />
                  <h3 className="text-sm p-2 xl:text-sm xl:p-2">Disetujui</h3>
                </div>
                <div className="flex my-2 xl:flex xl:my-2">
                  <IoEllipse color="red" className="m-2.5 xl:m-2.5" />
                  <h3 className="text-sm p-2 xl:text-sm xl:p-2">Ditolak</h3>
                </div>
                <div className="flex my-2 xl:flex xl:my-2">
                  <IoEllipse color="gray" className="m-2.5 xl:m-2.5" />
                  <h3 className="text-sm p-2 xl:text-sm xl:p-2">Dibatalkan</h3>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="border-2 border-neutral-100 rounded-md p-4 xl:border-2 xl:border-neutral-100 xl:rounded-md xl:p-4">
          <h2 className="font-semibold xl:font-semibold">Ruangan</h2>
          <div className="grid grid-cols-1 grid-auto-rows my-2 xl:grid xl:grid-flow-row-dense xl:grid-cols-3 xl:grid-rows-1 xl:my-2">
            <div className="w-full border-r-2 border-r-neutral-100 xl:w-full xl:p-4 xl:border-r-2 xl:border-r-neutral-100">
              <h3 className="text-sm font-bold xl:text-sm xl:font-bold">CC1</h3>
              <p className="text-sm xl:text-sm">Ruang Rapat</p>
              <img src="/cc1.jpg" alt="Ruang CC1" className="w-full h-48 rounded-lg object-cover my-2 xl:w-full xl:h-48 xl:rounded-lg xl:object-cover xl:my-2" />
              <ul className="text-sm list-disc pl-4 xl:text-sm xl:list-disc xl:pl-4">
                <li>Kapasitas 20 orang</li>
                <li>LCD Projector</li>
                <li>Komunikasi Video Conference</li>
              </ul>
            </div>
            <div className="w-full pt-4 xl:w-full xl:p-4 xl:border-r-2 xl:border-r-neutral-100">
              <h3 className="text-sm font-bold xl:text-sm xl:font-bold">CC2</h3>
              <p className="text-sm xl:text-sm">Ruang Tengah</p>
              <img src="/cc2.jpg" alt="Ruang CC2" className="w-full h-48 rounded-lg object-cover my-2 xl:w-full xl:h-48 xl:rounded-lg xl:object-cover xl:my-2" />
              <ul className="text-sm list-disc pl-4 xl:text-sm xl:list-disc xl:pl-4">
                <li>Kapasitas 20 orang</li>
                <li>LCD Projector</li>
                <li>Komunikasi Video Conference</li>
              </ul>
            </div>
            <div className="w-full pt-4 xl:w-full xl:rounded-md xl:p-4">
              <h3 className="text-sm font-bold xl:text-sm xl:font-bold">CC3</h3>
              <p className="text-sm xl:text-sm">Ruang Lorong</p>
              <img src="/cc3.jpg" alt="Ruang CC3" className="w-full h-48 rounded-lg object-cover my-2 xl:w-full xl:h-48 xl:rounded-lg xl:object-cover xl:my-2" />
              <ul className="text-sm list-disc pl-4 xl:text-sm xl:list-disc xl:pl-4">
                <li>Kapasitas 10 orang</li>
                <li>Mobile Interactive Display</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <Modal isVisible={isModalVisible} onClose={closeModal} />
    </div>
  )
}

export default CardLayananPengajuanCC;
