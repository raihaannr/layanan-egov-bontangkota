import { FC } from 'react';
import { IoCloseCircle } from 'react-icons/io5';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  booking: Booking | null;
}

interface Booking {
  pemohon: string;
  instansi: string;
  ruangan: string;
  keperluan: string;
  mulai: string;
  selesai: string;
  status: string;
}

const ModalValidation: FC<ModalProps> = ({ isOpen, onClose, booking }) => {
  if (!isOpen || !booking) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="relative bg-white p-8 rounded-md w-1/2">
        <h3 className="text-lg leading-6 font-medium text-gray-900" id="modal-title">
          Booking Details
        </h3>
        <div className="gridmt-2">
          <p className="text-sm text-gray-500">Pemohon: {booking.pemohon}</p>
          <p className="text-sm text-gray-500">Instansi: {booking.instansi}</p>
          <p className="text-sm text-gray-500">Ruangan: {booking.ruangan}</p>
          <p className="text-sm text-gray-500">Keperluan: {booking.keperluan}</p>
          <p className="text-sm text-gray-500">Mulai: {booking.mulai}</p>
          <p className="text-sm text-gray-500">Selesai: {booking.selesai}</p>
          <p className="text-sm text-gray-500">Status: {booking.status}</p>
        </div>

        <div className="bg-gray-50 px-4 py-3 sm:px-6 flex justify-center">
          <button
            type="button"
            className="inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-green-600 text-base font-medium text-white hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 sm:ml-3 sm:w-auto sm:text-sm sm:justify-start"
            onClick={() => console.log('Processed')}
          >
            Processed
          </button>
          <button
            type="button"
            className="mt-3 inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-blue-600 text-base font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm sm:justify-start"
            onClick={() => console.log('Accepted')}
          >
            Accepted
          </button>
          <button
            type="button"
            className="mt-3 inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-red-600 text-base font-medium text-white hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm sm:justify-start"
            onClick={() => console.log('Rejected')}
          >
            Rejected
          </button>
          <button
            type="button"
            className="mt-3 inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-yellow-600 text-base font-medium text-white hover:bg-yellow-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm sm:justify-start"
            onClick={() => console.log('Cancelled')}
          >
            Cancelled
          </button>
          <button
            type="button"
            className="absolute top-2 right-2 mt-3 inline-flex justify-center rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
            onClick={onClose}
          >
            <IoCloseCircle size={30}/>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ModalValidation;
