'use client';
import React, { useState, useEffect } from 'react';
import KontenTabel from '@/components/konten-tabel';
import Sidebar from './sidebar';
import { IoCalendar } from 'react-icons/io5';
import ModalCalender from './modal-calender';
import { getAllPemesanan } from '@/lib/actions';

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

const TabelCC1Client: React.FC = () => {
  const itemsPerPage = 10; // Jumlah item per halaman
  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState("");
  const [pemesanan, setPemesanan] = useState<Pemesanan[]>([]);
  const [message, setMessage] = useState<string | null>(null);
  const [isModalVisible, setIsModalVisible] = useState<boolean>(false);

  useEffect(() => {
    const fetchData = async () => {
      const { pemesanan, message } = await getAllPemesanan();
      if (message) {
        setMessage(message);
      } else {
        setPemesanan(pemesanan);
      }
    };
    fetchData();
  }, []);

  if (message) {
    return (
      <div className="h-screen flex items-center justify-center">
        <p className="text-red-500">{message}</p>
      </div>
    );
  }

  const totalPages = Math.ceil(pemesanan.length / itemsPerPage);

  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  const startIndex = (currentPage - 1) * itemsPerPage;

  const filteredItems = pemesanan.filter(item =>
    item.pemohon.toLowerCase().includes(searchTerm.toLowerCase()) ||
    item.instansi.toLowerCase().includes(searchTerm.toLowerCase()) ||
    item.ruangan.toLowerCase().includes(searchTerm.toLowerCase()) ||
    item.keperluan.toLowerCase().includes(searchTerm.toLowerCase()) ||
    item.status.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const currentItems = filteredItems.slice(startIndex, startIndex + itemsPerPage);

  const openModal = () => setIsModalVisible(true);
  const closeModal = () => setIsModalVisible(false);

  return (
    <div className="relative xl:flex xl:min-h-screen">
      <div className="fixed bottom-0 w-full xl:static xl:pt-20 xl:w-64 xl:px-4 xl:py-0 xl:m-0 xl:bg-transparent">
        <Sidebar />
      </div>
      <div className="xl:flex-1 xl:relative xl:bg-neutral-100 mb-20 xl:mb-5">
        <button onClick={openModal} className='absolute top-14 right-5 xl:absolute xl:top-36 xl:right-10'>
          <IoCalendar size={25} color='LightSlateGray'/>
        </button>
        <KontenTabel
          currentItems={currentItems}
          startIndex={startIndex}
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
          currentPage={currentPage}
          totalPages={totalPages}
          handlePageChange={handlePageChange}
        />
      </div>
      <ModalCalender isVisible={isModalVisible} onClose={closeModal} />
    </div>
  );
};

export default TabelCC1Client;
