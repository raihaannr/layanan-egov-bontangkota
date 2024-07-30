import Link from 'next/link'
import React from 'react'
import { IoCallOutline, IoWifi } from 'react-icons/io5'

const Sidebar = () => {
  return (
    <div className='flex xl:block justify-evenly py-2 m-3 rounded-md px-1.5 bg-sky-100 xl:py-0 xl:m-0 xl:rounded-none xl:px-0 xl:bg-transparent'>
      <h1 className="xl:block hidden xl:font-bold xl:text-lg">Layanan</h1>
      
      <Link href="/dashboard-admin/bontang-bebas-kuota">
        <div className="xl:grid xl:grid-cols-6 xl:grid-rows-1 xl:rounded-md xl:p-2 xl:mt-3 xl:shadow-md xl:cursor-pointer xl:hover:bg-neutral-100">
          <img src="../icon1.png" alt="icon cc" className="w-8 h-8 rounded-lg object-cover place-items-center brightness-0 xl:w-8 xl:h-8 xl:rounded-lg xl:object-cover xl:place-items-center xl:brightness-0" />
          <div className="xl:block hidden xl:col-span-5 xl:pt-1 xl:px-1 xl:font-medium">Bontang Bebas Kuota</div>
        </div>
      </Link>
      
      <Link href="/dashboard-admin/bontang-siaga">
        <div className="xl:grid xl:grid-cols-6 xl:grid-rows-1 xl:rounded-md xl:p-2 xl:shadow-md xl:cursor-pointer xl:hover:bg-neutral-100">
        <img src="../icon2.png" alt="icon cc" className="w-8 h-8 rounded-lg object-cover place-items-center brightness-0 xl:w-8 xl:h-8 xl:rounded-lg xl:object-cover xl:place-items-center xl:brightness-0" />
          <div className="xl:block hidden xl:col-span-5 xl:pt-1 xl:px-1 xl:font-medium">Bontang Siaga</div>
        </div>
      </Link>
      
      <Link href="/dashboard-admin/pembuatan-update-website">
        <div className="xl:grid xl:grid-cols-6 xl:grid-rows-1 xl:rounded-md xl:p-2 xl:shadow-md xl:cursor-pointer xl:hover:bg-neutral-100">
          <img src="../icon3.png" alt="icon cc" className="w-8 h-8 rounded-lg object-cover place-items-center brightness-0 xl:w-8 xl:h-8 xl:rounded-lg xl:object-cover xl:place-items-center xl:brightness-0" />
          <div className="xl:block hidden xl:col-span-5 xl:pt-1 xl:px-1 xl:font-medium">Pembuatan/Update Website</div>
        </div>
      </Link>
      
      <Link href="/dashboard-admin/pembuatan-update-aplikasi">
        <div className="xl:grid xl:grid-cols-6 xl:grid-rows-1 xl:rounded-md xl:p-2 xl:shadow-md xl:cursor-pointer xl:hover:bg-neutral-100">
          <img src="../icon4.png" alt="icon cc" className="w-8 h-8 rounded-lg object-cover place-items-center brightness-0 xl:w-8 xl:h-8 xl:rounded-lg xl:object-cover xl:place-items-center xl:brightness-0" />
          <div className="xl:block hidden xl:col-span-5 xl:pt-1 xl:px-1 xl:font-medium">Pembuatan/Update Aplikasi</div>
        </div>
      </Link>
      
      <Link href="/dashboard-admin/command-center">
        <div className="xl:grid xl:grid-cols-6 xl:grid-rows-1 xl:rounded-md xl:p-2 xl:shadow-md xl:cursor-pointer xl:hover:bg-neutral-100">
          <img src="../icon5.png" alt="icon cc" className="w-8 h-8 rounded-lg object-cover place-items-center brightness-0 xl:w-8 xl:h-8 xl:rounded-lg xl:object-cover xl:place-items-center xl:brightness-0" />
          <div className="xl:block hidden xl:col-span-5 xl:pt-1 xl:px-1 xl:font-medium">Command Center</div>
        </div>
      </Link>
      
      <Link href="/dashboard-admin/video-conference">
        <div className="xl:grid xl:grid-cols-6 xl:grid-rows-1 xl:rounded-md xl:p-2 xl:shadow-md xl:cursor-pointer xl:hover:bg-neutral-100">
          <img src="../icon6.png" alt="icon cc" className="w-8 h-8 rounded-lg object-cover place-items-center brightness-0 xl:w-8 xl:h-8 xl:rounded-lg xl:object-cover xl:place-items-center xl:brightness-0" />
          <div className="xl:block hidden xl:col-span-5 xl:pt-1 xl:px-1 xl:font-medium">Video Conference</div>
        </div>
      </Link>
      
      <Link href="/dashboard-admin/narasumber-tik">
        <div className="xl:grid xl:grid-cols-6 xl:grid-rows-1 xl:rounded-md xl:p-2 xl:shadow-md xl:cursor-pointer xl:hover:bg-neutral-100">
          <img src="../icon7.png" alt="icon cc" className="w-8 h-8 rounded-lg object-cover place-items-center brightness-0 xl:w-8 xl:h-8 xl:rounded-lg xl:object-cover xl:place-items-center xl:brightness-0" />
          <div className="xl:block hidden xl:col-span-5 xl:pt-1 xl:px-1 xl:font-medium">Narasumber TIK</div>
        </div>
      </Link>
      
    </div>
  )
}

export default Sidebar
