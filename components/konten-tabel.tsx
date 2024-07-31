import React from "react";
import { ActionButton } from "./button";

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

interface KontenTabelProps {
  currentItems: Pemesanan[];
  startIndex: number;
  searchTerm: string;
  setSearchTerm: (term: string) => void;
  currentPage: number;
  totalPages: number;
  handlePageChange: (pageNumber: number) => void;
}

const KontenTabel: React.FC<KontenTabelProps> = ({
  currentItems,
  startIndex,
  searchTerm,
  setSearchTerm,
  currentPage,
  totalPages,
  handlePageChange,
}) => {
  return (
    <div className="mt-20 mx-4">
      <h1 className="font-bold text-lg pl-2 border-l-4 border-l-orange-400">
        Command Center
      </h1>
      <input
        type="text"
        placeholder="Cari data..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="my-4 p-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-orange-500"
      />
      <div className="flex flex-col">
        <div className="overflow-x-auto">
          <div className="py-2 inline-block min-w-full">
            <div className="overflow-hidden rounded-lg shadow-lg">
              <table className="w-full text-left text-sm border-collapse">
                <thead className="bg-gray-800 text-white">
                  <tr>
                    <th className="px-4 py-2 font-medium">No</th>
                    <th className="px-4 py-2 font-medium">Pemohon</th>
                    <th className="px-4 py-2 font-medium xl:table-cell hidden">Instansi</th>
                    <th className="px-4 py-2 font-medium xl:table-cell hidden">Ruangan</th>
                    <th className="px-4 py-2 font-medium">Keperluan</th>
                    <th className="px-4 py-2 font-medium xl:table-cell hidden">Mulai</th>
                    <th className="px-4 py-2 font-medium xl:table-cell hidden">Selesai</th>
                    <th className="px-4 py-2 font-medium">Status</th>
                    <th className="px-4 py-2 font-medium">Action</th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {currentItems.map((pemesanan: Pemesanan, index: number) => (
                    <tr key={pemesanan.id} className="hover:bg-gray-50">
                      <td className="px-4 py-2 text-gray-900">
                        {startIndex + index + 1}
                      </td>
                      <td className="px-4 py-2 text-gray-900">{pemesanan.pemohon}</td>
                      <td className="px-4 py-2 text-gray-900 xl:table-cell hidden">{pemesanan.instansi}</td>
                      <td className="px-4 py-2 text-gray-900 xl:table-cell hidden">{pemesanan.ruangan}</td>
                      <td className="px-4 py-2 text-gray-900">{pemesanan.keperluan}</td>
                      <td className="px-4 py-2 text-gray-900 xl:table-cell hidden">
                        {new Date(pemesanan.pinjam).toString()}
                      </td>
                      <td className="px-4 py-2 text-gray-900 xl:table-cell hidden">
                        {new Date(pemesanan.selesai).toLocaleString()}
                      </td>
                      <td className="px-4 py-2 text-gray-900">{pemesanan.status}</td>
                      <td className="px-4 py-2">
                        <button>
                          <ActionButton id={pemesanan.id} />
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
        <div className="flex justify-between items-center mt-4">
          <button
            className={`px-4 py-2 mx-1 rounded-md font-medium ${
              currentPage === 1
                ? "bg-gray-300 text-gray-600"
                : "bg-blue-500 text-white hover:bg-blue-700"
            }`}
            onClick={() => handlePageChange(currentPage - 1)}
            disabled={currentPage === 1}
          >
            Previous
          </button>
          <div className="text-gray-700">
            Page {currentPage} of {totalPages}
          </div>
          <button
            className={`px-4 py-2 mx-1 rounded-md font-medium ${
              currentPage === totalPages
                ? "bg-gray-300 text-gray-600"
                : "bg-blue-500 text-white hover:bg-blue-700"
            }`}
            onClick={() => handlePageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default KontenTabel;
