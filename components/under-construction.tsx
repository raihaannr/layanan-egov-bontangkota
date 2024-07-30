import Link from 'next/link';
import React from 'react';
import { FaTools } from 'react-icons/fa';

const UnderConstruction: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-white rounded-lg shadow-lg text-gray-800">
      <div className="bg-neutral-100 p-8 rounded-lg shadow-lg text-center">
        <div className="flex justify-center mb-4">
          <FaTools className="text-6xl text-yellow-500" />
        </div>
        <h1 className="text-2xl font-bold mb-2">Laman Ini Masih Dalam Proses Pengembangan</h1>
        <p className="text-gray-600 mb-4">Kami sedang bekerja keras untuk segera menyelesaikannya. Terima kasih atas kesabaran Anda!</p>
        <Link 
          className="mt-4 px-4 py-2 bg-sky-900 text-white rounded-lg hover:bg-sky-950 transition duration-300"
          href='/'
        >
          Kembali ke Beranda
        </Link>
      </div>
    </div>
  );
}

export default UnderConstruction;
