import React from 'react';
import formatDateToID from "@/lib/format-date";
import { IoClose } from 'react-icons/io5';

interface ModalProps {
  onClose: () => void;
  event: any;
}

const ModalDesk: React.FC<ModalProps> = ({ onClose, event }) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      <div className="fixed inset-0 bg-black opacity-50"></div>
      <div className="relative bg-white p-6 rounded-lg shadow-lg z-10 w-full max-w-lg mx-4 md:mx-0">
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-gray-400 hover:text-gray-600 focus:outline-none"
        >
          <IoClose className="h-6 w-6" />
        </button>
        <h2 className="text-2xl font-semibold mb-4 text-center">{event.title}</h2>
        <div className="space-y-2">
          <p className="flex items-center"><strong className="w-24">Pemohon</strong> : {event.extendedProps.pemohon}</p>
          <p className="flex items-center"><strong className="w-24">Instansi</strong> : {event.extendedProps.instansi}</p>
          <p className="flex items-center"><strong className="w-24">Ruangan</strong> : {event.extendedProps.ruangan}</p>
          <p className="flex items-center"><strong className="w-24">Keperluan</strong> : {event.extendedProps.keperluan}</p>
          {/* <p className="flex items-center"><strong className="w-24">Surat:</strong> 
            <a href={event.extendedProps.surat} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:text-blue-700">Lihat Surat</a>
          </p> */}
          <p className="flex items-center"><strong className="w-24">Start</strong> : {formatDateToID(event.start)}</p>
          <p className="flex items-center"><strong className="w-24">End</strong> : {formatDateToID(event.end)}</p>
          <p className="flex items-center"><strong className="w-24">Status</strong> : {event.extendedProps.status}</p>
        </div>
        <button
          onClick={onClose}
          className="mt-6 w-full px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-700 focus:outline-none"
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default ModalDesk;
