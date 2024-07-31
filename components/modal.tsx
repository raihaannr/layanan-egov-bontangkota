import { uploadPermohonan } from "@/lib/actions";
import React, { FC } from "react";
import { useFormState } from "react-dom";
import { SubmitButton } from "./button";

interface ModalProps {
  isVisible: boolean;
  onClose: () => void;
}

const Modal: FC<ModalProps> = ({ isVisible, onClose }) => {
  const [state, formAction] = useFormState(uploadPermohonan, null);
  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50 xl:fixed xl:inset-0 xl:bg-black xl:bg-opacity-50 xl:flex xl:justify-center xl:items-center xl:z-50">
      <div className="bg-white p-4 rounded-md w-10/12 max-h-[90vh] overflow-y-auto xl:bg-white xl:p-8 xl:rounded-md xl:w-2/3 xl:max-h-[90vh] xl:overflow-y-auto">
        <h2 className="text-xl font-bold mb-4 xl:text-xl xl:font-bold xl:mb-4">Buat Pengajuan Layanan</h2>
        <form action={formAction}>
          <div className="xl:grid xl:grid-cols-2 xl:grid-rows-1 xl:gap-6">
            <div>
              <div className="mb-4 xl:mb-4">
                <label className="text-gray-700 font-medium text-sm xl:text-gray-700 xl:font-medium xl:text-sm">Nama Pemohon</label>
                <input type="text" name="pemohon" className="w-full border p-2 rounded-md xl:w-full xl:border xl:p-2 xl:rounded-md" />
                <div aria-live="polite" aria-atomic="true">
                  <div className="text-sm text-red-500 mt-2">{state?.error?.pemohon}</div>
                </div>
              </div>
              <div className="mb-4 xl:mb-4">
                <label className="text-gray-700 font-medium text-sm xl:text-gray-700 xl:font-medium xl:text-sm">Instansi</label>
                <input type="text" name="instansi" className="w-full border p-2 rounded-md xl:w-full xl:border xl:p-2 xl:rounded-md" />
                <div aria-live="polite" aria-atomic="true">
                  <div className="text-sm text-red-500 mt-2">{state?.error?.instansi}</div>
                </div>
              </div>
              <div className="mb-4 xl:mb-4">
                <label className="text-gray-700 font-medium text-sm xl:text-gray-700 xl:font-medium xl:text-sm">Ruangan</label>
                  <select name="ruangan"
                  className="select select-bordered w-full border p-2 rounded-md xl:w-full xl:border xl:p-2 xl:rounded-md"
                >
                  <option value="" disabled>
                    pilih ruangan
                  </option>
                  <option value="cc1">
                    CC1-Ruang Rapat
                  </option>
                  <option value="cc2">
                    CC2-Ruang Tengah
                  </option>
                  <option value="cc3">
                    CC3-Ruang Lorong
                  </option>
                </select>
                <div aria-live="polite" aria-atomic="true">
                    <div className="text-sm text-red-500 mt-2">{state?.error?.ruangan}</div>
                  </div>
              </div>
              <div className="mb-4 xl:mb-4">
                <label className="text-gray-700 font-medium text-sm xl:text-gray-700 xl:font-medium xl:text-sm">Keperluan</label>
                <input type="text" name="keperluan" className="w-full border p-2 rounded-md xl:w-full xl:border xl:p-2 xl:rounded-md" />
                <div aria-live="polite" aria-atomic="true">
                  <div className="text-sm text-red-500 mt-2">{state?.error?.keperluan}</div>
                </div>
              </div>
            </div>

            <div>
              <div className="mb-4 xl:mb-4">
                <label className="text-gray-700 font-medium text-sm xl:text-gray-700 xl:font-medium xl:text-sm">Waktu Pinjam</label>
                <input type="datetime-local" name="pinjam" className="w-full border p-2 rounded-md xl:w-full xl:border xl:p-2 xl:rounded-md" />
                <div aria-live="polite" aria-atomic="true">
                  <div className="text-sm text-red-500 mt-2">{state?.error?.pinjam}</div>
                </div>
              </div>
              <div className="mb-4 xl:mb-4">
                <label className="text-gray-700 font-medium text-sm xl:text-gray-700 xl:font-medium xl:text-sm">Waktu Selesai</label>
                <input type="datetime-local" name="selesai" className="w-full border p-2 rounded-md xl:w-full xl:border xl:p-2 xl:rounded-md" />
                <div aria-live="polite" aria-atomic="true">
                  <div className="text-sm text-red-500 mt-2">{state?.error?.selesai}</div>
                </div>
              </div>
              <div className="mb-4 xl:mb-4">
                <label className="text-gray-700 font-medium text-sm xl:text-gray-700 xl:font-medium xl:text-sm">Unggah Surat Permohonan</label>
                <input type="file" name="surat" className="w-full border p-2 rounded-md xl:w-full xl:border xl:p-2 xl:rounded-md" />
                <div aria-live="polite" aria-atomic="true">
                  <div className="text-sm text-red-500 mt-2">{state?.error?.surat}</div>
                </div>
              </div>
              <div>
                <input type="hidden" name="status" value="Diajukan" className="w-full border p-2 rounded-md xl:w-full xl:border xl:p-2 xl:rounded-md" />
              </div>
            </div>
          </div>

          <div className="flex justify-end xl:flex xl:justify-end">
            <button type="button" className="bg-gray-400 text-white px-4 py-2 rounded-md mr-2 xl:bg-gray-400 xl:text-white xl:px-4 xl:py-2 xl:rounded-md xl:mr-2" onClick={onClose}>
              Batal
            </button>
            <SubmitButton label="buat" />
          </div>
        </form>
      </div>
    </div>
  );
};

export default Modal;