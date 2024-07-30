"use client";

import Image from 'next/image';
import Link from 'next/link';
import { IoHome, IoDocumentText, IoHelpCircle } from 'react-icons/io5';
import { useSession } from 'next-auth/react';

const Navbar = () => {
  const { data: session, status } = useSession();

  return (
    <nav className='max-w-full backdrop-blur-md bg-gray-400/45'>
      <div className="flex max-w-screen-xl mx-auto">
        <div className='flex-1 content-center mx-4'>
          <Image
            src="/diskominfobtg.png"
            width={125}
            height={125}
            alt="Logo Diskominfo btg"
          />
        </div>
        <div className='mx-4'>
          <ul className='flex space-x-3 font-semibold'>
            {session?.user?.role === 'admin' && (
              <li className='xl:p-5 py-4 mx-1 text-white '>
                <a href="/dashboard-admin" className='bg-gray-700 p-2 rounded-lg'>Admin</a>
              </li>
            )}
            <li className='xl:p-5 py-4 mx-1 text-white'>
              <a href="/" className='xl:block hidden'>Beranda</a>
              <Link href="/" className='xl:hidden'>
                <IoHome size={25} />
              </Link>
            </li>
            <li className='xl:p-5 py-4 mx-1 text-white'>
              <a href="/faq" className='xl:block hidden'>FAQ</a>
              <Link href="/faq" className='xl:hidden'>
                <IoHelpCircle size={25} />
              </Link>
            </li>
            <li className='xl:p-5 py-4 mx-1 text-white'>
              <a href="/panduan" className='xl:block hidden'>Panduan</a>
              <Link href="/panduan" className='xl:hidden'>
                <IoDocumentText size={25} />
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
