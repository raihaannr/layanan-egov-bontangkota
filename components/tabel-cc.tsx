'use client'
import { useState, FC } from 'react';
import { IoAddCircle, IoLink } from "react-icons/io5";
import Link from "next/link";
import ModalValidation from './modal-validasi';

interface Booking {
  pemohon: string;
  instansi: string;
  ruangan: string;
  keperluan: string;
  mulai: string;
  selesai: string;
  status: string;
}

const bookings: Booking[] = [
    {
      pemohon: "Budi",
      instansi: "Dinas Pendidikan",
      ruangan: "Ruang Rapat A",
      keperluan: "Rapat Koordinasi",
      mulai: "2024-07-17T10:00:00",
      selesai: "2024-07-17T12:00:00",
      status: "menunggu",
    },
    {
      pemohon: "Ani",
      instansi: "Kantor Desa",
      ruangan: "Ruang Serbaguna",
      keperluan: "Pelatihan UMKM",
      mulai: "2024-07-18T09:00:00",
      selesai: "2024-07-18T14:00:00",
      status: "diterima",
    },
    {
      pemohon: "Cici",
      instansi: "SMAN 1",
      ruangan: "Lab Komputer",
      keperluan: "Ujian Praktik",
      mulai: "2024-07-19T08:00:00",
      selesai: "2024-07-19T11:00:00",
      status: "ditolak",
    },
    {
      pemohon: "Doni",
      instansi: "Universitas A",
      ruangan: "Aula Utama",
      keperluan: "Seminar Nasional",
      mulai: "2024-07-20T09:00:00",
      selesai: "2024-07-20T16:00:00",
      status: "menunggu",
    },
    {
      pemohon: "Edi",
      instansi: "Kantor Kesehatan",
      ruangan: "Ruang Meeting",
      keperluan: "Koordinasi Posyandu",
      mulai: "2024-07-22T08:00:00",
      selesai: "2024-07-22T10:00:00",
      status: "diterima",
    },
    {
      pemohon: "Feri",
      instansi: "Dinas Pertanian",
      ruangan: "Ruang Rapat B",
      keperluan: "Sosialisasi Program",
      mulai: "2024-07-23T13:00:00",
      selesai: "2024-07-23T15:00:00",
      status: "menunggu",
    },
    {
      pemohon: "Gina",
      instansi: "Perpustakaan Daerah",
      ruangan: "Ruang Seminar",
      keperluan: "Pelatihan Literasi",
      mulai: "2024-07-24T09:00:00",
      selesai: "2024-07-24T12:00:00",
      status: "diterima",
    },
    {
      pemohon: "Hani",
      instansi: "Dinas Sosial",
      ruangan: "Ruang Rapat A",
      keperluan: "Rapat Penanggulangan",
      mulai: "2024-07-25T10:00:00",
      selesai: "2024-07-25T12:00:00",
      status: "ditolak",
    },
    {
      pemohon: "Iwan",
      instansi: "Kantor Pajak",
      ruangan: "Aula Utama",
      keperluan: "Sosialisasi Pajak",
      mulai: "2024-07-26T14:00:00",
      selesai: "2024-07-26T16:00:00",
      status: "diterima",
    },
    {
      pemohon: "Joko",
      instansi: "Dinas Pekerjaan Umum",
      ruangan: "Ruang Meeting",
      keperluan: "Koordinasi Proyek",
      mulai: "2024-07-27T09:00:00",
      selesai: "2024-07-27T11:00:00",
      status: "menunggu",
    },
    {
      pemohon: "Kiki",
      instansi: "Dinas Perdagangan",
      ruangan: "Ruang Rapat B",
      keperluan: "Rapat Evaluasi",
      mulai: "2024-07-28T10:00:00",
      selesai: "2024-07-28T12:00:00",
      status: "diterima",
    },
    {
      pemohon: "Lina",
      instansi: "Kantor Lingkungan Hidup",
      ruangan: "Ruang Serbaguna",
      keperluan: "Workshop Lingkungan",
      mulai: "2024-07-29T13:00:00",
      selesai: "2024-07-29T15:00:00",
      status: "ditolak",
    },
    {
      pemohon: "Maya",
      instansi: "Dinas Pariwisata",
      ruangan: "Ruang Seminar",
      keperluan: "Presentasi Pariwisata",
      mulai: "2024-07-30T09:00:00",
      selesai: "2024-07-30T11:00:00",
      status: "diterima",
    },
    {
      pemohon: "Nina",
      instansi: "SMAN 2",
      ruangan: "Lab Komputer",
      keperluan: "Pelatihan TIK",
      mulai: "2024-08-01T08:00:00",
      selesai: "2024-08-01T10:00:00",
      status: "menunggu",
    },
    {
      pemohon: "Oni",
      instansi: "Universitas B",
      ruangan: "Aula Utama",
      keperluan: "Diskusi Ilmiah",
      mulai: "2024-08-02T13:00:00",
      selesai: "2024-08-02T15:00:00",
      status: "diterima",
    },
    {
      pemohon: "Peni",
      instansi: "Kantor Kesehatan",
      ruangan: "Ruang Meeting",
      keperluan: "Seminar Kesehatan",
      mulai: "2024-08-03T09:00:00",
      selesai: "2024-08-03T12:00:00",
      status: "ditolak",
    },
    {
      pemohon: "Rini",
      instansi: "Dinas Pendidikan",
      ruangan: "Ruang Rapat A",
      keperluan: "Workshop Kurikulum",
      mulai: "2024-08-04T10:00:00",
      selesai: "2024-08-04T12:00:00",
      status: "diterima",
    },
    {
      pemohon: "Susi",
      instansi: "Kantor Desa",
      ruangan: "Ruang Serbaguna",
      keperluan: "Pelatihan Administrasi",
      mulai: "2024-08-05T08:00:00",
      selesai: "2024-08-05T10:00:00",
      status: "menunggu",
    },
    {
      pemohon: "Toni",
      instansi: "Dinas Pertanian",
      ruangan: "Ruang Rapat B",
      keperluan: "Rapat Evaluasi",
      mulai: "2024-08-06T13:00:00",
      selesai: "2024-08-06T15:00:00",
      status: "diterima",
    },
    {
      pemohon: "Uli",
      instansi: "Perpustakaan Daerah",
      ruangan: "Ruang Seminar",
      keperluan: "Sosialisasi Program",
      mulai: "2024-08-07T10:00:00",
      selesai: "2024-08-07T12:00:00",
      status: "ditolak",
    },
    {
      pemohon: "Vina",
      instansi: "Dinas Sosial",
      ruangan: "Ruang Rapat A",
      keperluan: "Rapat Penanggulangan",
      mulai: "2024-08-08T09:00:00",
      selesai: "2024-08-08T11:00:00",
      status: "menunggu",
    },
    {
      pemohon: "Wina",
      instansi: "Kantor Pajak",
      ruangan: "Aula Utama",
      keperluan: "Sosialisasi Pajak",
      mulai: "2024-08-09T14:00:00",
      selesai: "2024-08-09T16:00:00",
      status: "diterima",
    },
    {
      pemohon: "Yani",
      instansi: "Dinas Pekerjaan Umum",
      ruangan: "Ruang Meeting",
      keperluan: "Koordinasi Proyek",
      mulai: "2024-08-10T08:00:00",
      selesai: "2024-08-10T10:00:00",
      status: "ditolak",
    },
    {
      pemohon: "Zaki",
      instansi: "Dinas Perdagangan",
      ruangan: "Ruang Rapat B",
      keperluan: "Rapat Evaluasi",
      mulai: "2024-08-11T13:00:00",
      selesai: "2024-08-11T15:00:00",
      status: "menunggu",
    },
    {
      pemohon: "Agus",
      instansi: "Dinas Pendidikan",
      ruangan: "Ruang Rapat A",
      keperluan: "Rapat Koordinasi",
      mulai: "2024-08-12T10:00:00",
      selesai: "2024-08-12T12:00:00",
      status: "diterima",
    },
    {
      pemohon: "Bambang",
      instansi: "Kantor Desa",
      ruangan: "Ruang Serbaguna",
      keperluan: "Pelatihan UMKM",
      mulai: "2024-08-13T09:00:00",
      selesai: "2024-08-13T14:00:00",
      status: "ditolak",
    },
    {
      pemohon: "Citra",
      instansi: "SMAN 1",
      ruangan: "Lab Komputer",
      keperluan: "Ujian Praktik",
      mulai: "2024-08-14T08:00:00",
      selesai: "2024-08-14T11:00:00",
      status: "menunggu",
    },
    {
      pemohon: "Dewi",
      instansi: "Universitas A",
      ruangan: "Aula Utama",
      keperluan: "Seminar Nasional",
      mulai: "2024-08-15T09:00:00",
      selesai: "2024-08-15T16:00:00",
      status: "diterima",
    },
    {
      pemohon: "Eka",
      instansi: "Kantor Kesehatan",
      ruangan: "Ruang Meeting",
      keperluan: "Koordinasi Posyandu",
      mulai: "2024-08-16T08:00:00",
      selesai: "2024-08-16T10:00:00",
      status: "ditolak",
    },
    {
      pemohon: "Faisal",
      instansi: "Dinas Pertanian",
      ruangan: "Ruang Rapat B",
      keperluan: "Sosialisasi Program",
      mulai: "2024-08-17T13:00:00",
      selesai: "2024-08-17T15:00:00",
      status: "menunggu",
    },
    {
      pemohon: "Gusti",
      instansi: "Perpustakaan Daerah",
      ruangan: "Ruang Seminar",
      keperluan: "Pelatihan Literasi",
      mulai: "2024-08-18T09:00:00",
      selesai: "2024-08-18T12:00:00",
      status: "diterima",
    },
    {
      pemohon: "Hendra",
      instansi: "Dinas Sosial",
      ruangan: "Ruang Rapat A",
      keperluan: "Rapat Penanggulangan",
      mulai: "2024-08-19T10:00:00",
      selesai: "2024-08-19T12:00:00",
      status: "ditolak",
    },
    {
      pemohon: "Ilham",
      instansi: "Kantor Pajak",
      ruangan: "Aula Utama",
      keperluan: "Sosialisasi Pajak",
      mulai: "2024-08-20T14:00:00",
      selesai: "2024-08-20T16:00:00",
      status: "diterima",
    },
    {
      pemohon: "Joko",
      instansi: "Dinas Pekerjaan Umum lksnn sknfg kgknkgn okngioheigo kngoifngi kegio oeg jego jngio efngio gnin wkgoi kgoij lkhgoij kkhgoih",
      ruangan: "Ruang Meeting",
      keperluan: "Koordinasi Proyek",
      mulai: "2024-08-21T09:00:00",
      selesai: "2024-08-21T11:00:00",
      status: "menunggu",
    },
    {
      pemohon: "Kiki",
      instansi: "Dinas Perdagangan",
      ruangan: "Ruang Rapat B",
      keperluan: "Rapat Evaluasi",
      mulai: "2024-08-22T10:00:00",
      selesai: "2024-08-22T12:00:00",
      status: "diterima",
    },
    {
      pemohon: "Lina",
      instansi: "Kantor Lingkungan Hidup",
      ruangan: "Ruang Serbaguna",
      keperluan: "Workshop Lingkungan",
      mulai: "2024-08-23T13:00:00",
      selesai: "2024-08-23T15:00:00",
      status: "ditolak",
    },
    {
      pemohon: "Maya",
      instansi: "Dinas Pariwisata",
      ruangan: "Ruang Seminar",
      keperluan: "Presentasi Pariwisata",
      mulai: "2024-08-24T09:00:00",
      selesai: "2024-08-24T11:00:00",
      status: "diterima",
    },
    {
      pemohon: "Nina",
      instansi: "SMAN 2",
      ruangan: "Lab Komputer",
      keperluan: "Pelatihan TIK",
      mulai: "2024-08-25T08:00:00",
      selesai: "2024-08-25T10:00:00",
      status: "menunggu",
    },
    {
      pemohon: "Oni",
      instansi: "Universitas B",
      ruangan: "Aula Utama",
      keperluan: "Diskusi Ilmiah",
      mulai: "2024-08-26T13:00:00",
      selesai: "2024-08-26T15:00:00",
      status: "diterima",
    },
    {
      pemohon: "Peni",
      instansi: "Kantor Kesehatan",
      ruangan: "Ruang Meeting",
      keperluan: "Seminar Kesehatan",
      mulai: "2024-08-27T09:00:00",
      selesai: "2024-08-27T12:00:00",
      status: "ditolak",
    },
    {
      pemohon: "Rini",
      instansi: "Dinas Pendidikan",
      ruangan: "Ruang Rapat A",
      keperluan: "Workshop Kurikulum",
      mulai: "2024-08-28T10:00:00",
      selesai: "2024-08-28T12:00:00",
      status: "diterima",
    },
    {
      pemohon: "Susi",
      instansi: "Kantor Desa",
      ruangan: "Ruang Serbaguna",
      keperluan: "Pelatihan Administrasi",
      mulai: "2024-08-29T08:00:00",
      selesai: "2024-08-29T10:00:00",
      status: "menunggu",
    },
    {
      pemohon: "Toni",
      instansi: "Dinas Pertanian",
      ruangan: "Ruang Rapat B",
      keperluan: "Rapat Evaluasi",
      mulai: "2024-08-30T13:00:00",
      selesai: "2024-08-30T15:00:00",
      status: "diterima",
    },
  ];

const TabelCc: FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedBooking, setSelectedBooking] = useState<Booking | null>(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [sortOrder, setSortOrder] = useState<'asc' | 'desc'>('asc');
  const bookingsPerPage = 10;

  const openModal = (booking: Booking) => {
    setSelectedBooking(booking);
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
    setSelectedBooking(null);
  };

  const sortedBookings = [...bookings].sort((a, b) => {
    if (a.status > b.status) return sortOrder === 'asc' ? -1 : 1;
    if (a.status < b.status) return sortOrder === 'asc' ? 1 : -1;
    return 0;
  });

  const totalPages = Math.ceil(sortedBookings.length / bookingsPerPage);
  const indexOfLastBooking = currentPage * bookingsPerPage;
  const indexOfFirstBooking = indexOfLastBooking - bookingsPerPage;
  const currentBookings = sortedBookings.slice(indexOfFirstBooking, indexOfLastBooking);

  const toggleSortOrder = () => {
    setSortOrder((prevOrder) => (prevOrder === 'asc' ? 'desc' : 'asc'));
  };

  return (
    <div className="relative grid grid-cols-6 grid-rows-1">
      <div className="h-screen">
        <div className="mt-20 mx-4 fixed -z-10 w-56">
          <h1 className="font-bold text-lg">ADMIN</h1>
          <div className="grid grid-cols-6 grid-rows-1 mt-3 rounded-md p-2 border-b-2">
            <img src="icon3.png" alt="icon cc" className="w-8 h-8 rounded-lg object-cover place-items-center brightness-0" />
            <div className="col-span-5 pt-1 px-1 font-medium">
              Bontang Bebas Kuota
            </div>
          </div>
          <div className="grid grid-cols-6 grid-rows-1 rounded-md p-2 border-b-2">
            <img src="icon3.png" alt="icon cc" className="w-8 h-8 rounded-lg object-cover place-items-center brightness-0" />
            <div className="col-span-5 pt-1 px-1 font-medium">
              Bontang Siaga
            </div>
          </div>
          <div className="grid grid-cols-6 grid-rows-1 rounded-md p-2 border-b-2">
            <img src="icon3.png" alt="icon cc" className="w-8 h-8 rounded-lg object-cover place-items-center brightness-0" />
            <div className="col-span-5 pt-1 px-1 font-medium">
              Pembuatan/Update Website
            </div>
          </div>
          <div className="grid grid-cols-6 grid-rows-1 rounded-md p-2 border-b-2">
            <img src="icon4.png" alt="icon cc" className="w-8 h-8 rounded-lg object-cover place-items-center brightness-0" />
            <div className="col-span-5 pt-1 px-1 font-medium">
              Pembuatan/Update Aplikasi
            </div>
          </div>
          <div className="grid grid-cols-6 grid-rows-1 rounded-md p-2 border-b-2">
            <img src="icon5.png" alt="icon cc" className="w-8 h-8 rounded-lg object-cover place-items-center brightness-0" />
            <div className="col-span-5 pt-1 px-1 font-medium">
              Command Center
            </div>
          </div>
          <div className="grid grid-cols-6 grid-rows-1 rounded-md p-2 border-b-2">
            <img src="icon6.png" alt="icon cc" className="w-8 h-8 rounded-lg object-cover place-items-center brightness-0" />
            <div className="col-span-5 pt-1 px-1 font-medium">
              Video Conference
            </div>
          </div>
          <div className="grid grid-cols-6 grid-rows-1 rounded-md p-2 border-b-2">
            <img src="icon7.png" alt="icon cc" className="w-8 h-8 rounded-lg object-cover place-items-center brightness-0" />
            <div className="col-span-5 pt-1 px-1 font-medium">
              Narasumber TIK
            </div>
          </div>
        </div>
      </div>
      <div className="bg-neutral-100 col-span-5">
        <div className="mt-20 mx-4">
          <h1 className="font-bold text-lg pl-2 border-l-4 border-l-orange-400">Command Center</h1>
          <div className="flex flex-col">
            <div className="overflow-x-auto">
              <div className="py-2 inline-block min-w-full">
                <div className="overflow-hidden">
                  <table className="w-full min-w-full text-center text-sm">
                    <thead className="border-b bg-gray-800">
                      <tr>
                        <th scope="col" className="font-medium text-white px-6 py-4">No</th>
                        <th scope="col" className="font-medium text-white px-6 py-4">Pemohon</th>
                        <th scope="col" className="font-medium text-white px-6 py-4">Instansi</th>
                        <th scope="col" className="font-medium text-white px-6 py-4">Ruangan</th>
                        <th scope="col" className="font-medium text-white px-6 py-4">Keperluan</th>
                        <th scope="col" className="font-medium text-white px-6 py-4">Mulai</th>
                        <th scope="col" className="font-medium text-white px-6 py-4">Selesai</th>
                        <th
                          scope="col"
                          className="font-medium text-white px-6 py-4 cursor-pointer"
                          onClick={toggleSortOrder}
                        >
                          Status {sortOrder === 'asc' ? '▲' : '▼'}
                        </th>
                        <th scope="col" className="font-medium text-white px-6 py-4">Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      {currentBookings.map((booking, index) => (
                        <tr key={index} className="bg-white border-b">
                          <td className="px-6 py-4 font-medium text-gray-900">
                            {indexOfFirstBooking + index + 1}
                          </td>
                          <td className="px-6 py-4 font-medium text-gray-900">{booking.pemohon}</td>
                          <td className="px-6 py-4 text-gray-900">{booking.instansi}</td>
                          <td className="px-6 py-4 text-gray-900">{booking.ruangan}</td>
                          <td className="px-6 py-4 text-gray-900">{booking.keperluan}</td>
                          <td className="px-6 py-4 whitespace-nowrap text-gray-900">{new Date(booking.mulai).toLocaleString()}</td>
                          <td className="px-6 py-4 whitespace-nowrap text-gray-900">{new Date(booking.selesai).toLocaleString()}</td>
                          <td className="px-6 py-4 text-gray-900">{booking.status}</td>
                          <td className="px-6 py-4 font-medium">
                            <button className="text-indigo-600 hover:text-indigo-900" onClick={() => openModal(booking)}>View</button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                  <div className="flex justify-between mt-4">
                    <button
                      onClick={() => setCurrentPage(currentPage - 1)}
                      disabled={currentPage === 1}
                      className="px-4 py-2 bg-gray-300 text-gray-800 rounded-md disabled:opacity-50"
                    >
                      Previous
                    </button>
                    <span>Page {currentPage} of {totalPages}</span>
                    <button
                      onClick={() => setCurrentPage(currentPage + 1)}
                      disabled={currentPage === totalPages}
                      className="px-4 py-2 bg-gray-300 text-gray-800 rounded-md disabled:opacity-50"
                    >
                      Next
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>      
      <ModalValidation isOpen={isOpen} onClose={closeModal} booking={selectedBooking} />
    </div>
  );
};

export default TabelCc;