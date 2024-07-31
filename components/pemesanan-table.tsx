'use client'
import { getUserPemesanan } from '@/lib/actions';
import React, { useEffect, useState } from 'react';
import { IoDocumentTextOutline, IoChevronBack } from 'react-icons/io5';
import Link from 'next/link';
import { CancelButton } from './button';
import formatTanggal from '@/lib/format-tanggal';

interface Pemesanan {
  id: string;
  pemohon: string;
  instansi: string;
  ruangan: string;
  keperluan: string;
  pinjam: Date;
  selesai: Date;
  surat: string;
  status: string;
  createdAt: Date;
}

const ITEMS_PER_PAGE = 2;

const PemesananCard: React.FC = () => {
  const [pemesananList, setPemesananList] = useState<Pemesanan[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [currentPage, setCurrentPage] = useState<number>(1);

  useEffect(() => {
    const fetchData = async () => {
      const result = await getUserPemesanan();
      if (result.pemesananList) {
        setPemesananList(result.pemesananList as Pemesanan[]);
      } else if (result.message) {
        setError(result.message);
      }
    };
    
    fetchData();
  }, []);

  const totalPages = Math.ceil(pemesananList.length / ITEMS_PER_PAGE);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  const currentItems = pemesananList.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  );

  const getStatusBgColor = (status: string) => {
    switch (status) {
      case 'Disetujui':
        return 'bg-green-100';
      case 'Ditolak':
        return 'bg-red-100';
      case 'Diajukan':
        return 'bg-yellow-100';
      default:
        return 'bg-gray-100';
    }
  };

  if (error) {
    return <div className="text-red-500">{error}</div>;
  }

  return (
    <div className="px-5 space-y-4 xl:p-4 xl:space-y-4">
      <div className="text-neutral-500 hover:text-neutral-600 mb-4 w-fit xl:text-neutral-500 xl:hover:text-neutral-600 xl:mb-4 xl:w-fit">
        <Link href="/command-center/pengajuan-layanan" className="flex items-end xl:flex xl:items-end">
          <IoChevronBack size={20} />
          <p className="text-sm xl:text-sm">command-center</p>
        </Link>
      </div>
      {currentItems.map((data) => (
        <div key={data.id} className={`shadow-md rounded-lg p-6 relative xl:shadow-md xl:rounded-lg xl:p-6 xl:relative ${getStatusBgColor(data.status)}`}>
          <div className="xl:grid xl:grid-cols-3 xl:grid-rows-1 xl:gap-4">
            <div className="py-2 border-b-2 border-b-neutral-300 xl:border-b-0 xl:border-b-neutral-300 xl:col-span-2 xl:grid xl:grid-cols-2 xl:grid-auto-rows xl:border-r-2 xl:border-r-neutral-300 xl:py-0">
              <h1 className="text-lg font-bold xl:col-span-2 xl:text-lg xl:font-bold">{data.keperluan}</h1>
              <div className="grid grid-cols-2 grid-rows-1 w-auto mt-4xl:col-span-2 xl:grid xl:grid-cols-2 xl:grid-rows-1 xl:w-auto xl:mt-4">
                <div className="">
                  <h2 className="text-xs font-medium text-gray-500 mt-2 xl:text-xs xl:font-medium xl:text-gray-500 xl:mt-2">Nama Pemohon</h2>
                  <p>{data.pemohon}</p>
                  <h2 className="text-xs font-medium text-gray-500 mt-2 xl:text-xs xl:font-medium xl:text-gray-500 xl:mt-2">Instansi</h2>
                  <p>{data.instansi}</p>
                  <h2 className="text-xs font-medium text-gray-500 mt-2 xl:text-xs xl:font-medium xl:text-gray-500 xl:mt-2">Ruangan</h2>
                  <p>{data.ruangan}</p>
                </div>
                <div className="">
                  <h2 className="text-xs font-medium text-gray-500 mt-2 xl:text-xs xl:font-medium xl:text-gray-500 xl:mt-2">Waktu Peminjaman</h2>
                  <p>{formatTanggal(data.pinjam)}</p>
                  <h2 className="text-xs font-medium text-gray-500 mt-2 xl:text-xs xl:font-medium xl:text-gray-500 xl:mt-2">Waktu Selesai</h2>
                  <p>{formatTanggal(data.selesai)}</p>
                  <h2 className="text-xs font-medium text-gray-500 mt-2 xl:text-xs xl:font-medium xl:text-gray-500 xl:mt-2">Surat Permohonan</h2>
                  <p className="w-fi xl:w-fit">
                    <Link href={data.surat} className="text-sky-700 hover:text-sky-950 w-fit xl:text-sky-700 xl:hover:text-sky-950 xl:w-fit">
                      <IoDocumentTextOutline size={25} />
                    </Link>
                  </p>
                </div>
              </div>
            </div>
            <div className="py-2 xl:py-0 xl:flex xl:flex-col xl:justify-between mt-4 xl:mt-0">  
              <p className="font-semibold text-gray-400 text-center p-2 xl:font-semibold xl:text-gray-400 xl:text-center xl:p-5">Status</p>
              <p className="text-3xl font-bold text-center p-2 xl:flex-1 xl:text-gray-600xl:text-3xl xl:font-bold xl:text-center xl:p-5 xl:text-gray-600">{data.status}</p>
              <div className="xl:flex-1 xl:px-2 mt-4 xl:mt-0">
                  <CancelButton id={data.id} />
                </div>
            </div>
          </div>
        </div>
      ))}
      <div className="flex justify-center mt-6 xl:flex xl:justify-center xl:mt-6">
        <nav>
          <ul className="flex flex-wrap justify-center list-style-none space-x-2 xl:flex xl:flex-wrap xl:justify-center xl:list-style-none xl:space-x-2">
            <li>
              <button
                onClick={() => handlePageChange(currentPage - 1)}
                disabled={currentPage === 1}
                className="px-4 py-2 bg-gray-300 text-gray-800 rounded-l-md hover:bg-gray-400 disabled:bg-gray-200 xl:px-4 xl:py-2 xl:bg-gray-300 xl:text-gray-800 xl:rounded-l-md xl:hover:bg-gray-400 xl:disabled:bg-gray-200"
              >
                Prev
              </button>
            </li>
            {Array.from({ length: totalPages }, (_, index) => (
              <li key={index}>
                <button
                  onClick={() => handlePageChange(index + 1)}
                  className={`px-4 py-2 border xl:px-4 xl:py-2 xl:border ${currentPage === index + 1 ? 'bg-blue-500 text-white xl:bg-blue-500 xl:text-white' : 'bg-white text-blue-500 xl:bg-white xl:text-blue-500'} hover:bg-blue-600 hover:text-white xl:hover:bg-blue-600 xl:hover:text-white`}
                >
                  {index + 1}
                </button>
              </li>
            ))}
            <li>
              <button
                onClick={() => handlePageChange(currentPage + 1)}
                disabled={currentPage === totalPages}
                className="px-4 py-2 bg-gray-300 text-gray-800 rounded-r-md hover:bg-gray-400 disabled:bg-gray-200 xl:px-4 xl:py-2 xl:bg-gray-300 xl:text-gray-800 xl:rounded-r-md xl:hover:bg-gray-400 xl:disabled:bg-gray-200"
              >
                Next
              </button>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default PemesananCard;