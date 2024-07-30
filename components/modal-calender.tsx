import React, { FC } from "react";
import FullCalendarComponent from "@/components/fullcalendar";
import FullCalendarComponentV2 from "@/components/fullcalendarv2";
import { IoClose } from "react-icons/io5";

interface ModalProps {
  isVisible: boolean;
  onClose: () => void;
}

const ModalCalender: FC<ModalProps> = ({ isVisible, onClose }) => {
  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50 xl:fixed xl:inset-0 xl:bg-black xl:bg-opacity-50 xl:flex xl:justify-center xl:items-center xl:z-50">
      <div className="relative bg-white p-4 rounded-md w-10/12 max-h-[90vh] overflow-y-auto xl:bg-white xl:p-8 xl:rounded-md xl:w-2/3 xl:max-h-[90vh] xl:overflow-y-auto">
        <button
            onClick={onClose}
            className="absolute top-2 right-2 text-gray-400 hover:text-gray-600 focus:outline-none"
            >
            <IoClose className="h-6 w-6" />
        </button>
        <h2 className="text-xl font-bold mb-4 xl:text-xl xl:font-bold xl:mb-4">Kalender Peminjaman Ruangan Command Center</h2>
        <div className="xl:block hidden xl:relative xl:w-full">
              <FullCalendarComponent />
            </div>
            <div className="xl:hidden xl:relative xl:w-full">
              <FullCalendarComponentV2 />
            </div>
      </div>
    </div>
  );
};

export default ModalCalender;
