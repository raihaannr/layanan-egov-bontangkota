'use client'
import { useState } from 'react';
import KontenTabel from '@/components/konten-tabel';
import Sidebar from './sidebar';
import { IoCalendar } from 'react-icons/io5';
import ModalCalender from './modal-calender';

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

interface TabelCC1ClientProps {
  pemesanan: Pemesanan[];
}

const TabelCC1Client: React.FC<TabelCC1ClientProps> = ({ pemesanan }) => {
  const itemsPerPage = 10; // Jumlah item per halaman
  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState("");

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

  const [isModalVisible, setIsModalVisible] = useState<boolean>(false);

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
}

export default TabelCC1Client;
