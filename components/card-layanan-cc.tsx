import Link from "next/link";
import { IoLocation, IoCall, IoTimeOutline, IoTicketOutline, IoLink, IoEllipse } from "react-icons/io5";

const CardLayananCC = () => {
  return (
    <div className="w-full h-auto bg-white shadow-lg mx-auto rounded-2xl px-5 :pb-10 pt-5 xl:w-full xl:h-auto xl:bg-white xl:shadow-lg xl:mx-auto xl:rounded-2xl xl:px-10 xl:pb-10 xl:pt-5">
      <h1 className="border-l-4 border-orange-400 pl-4 text-lg font-semibold xl:border-l-4 xl:border-orange-400 xl:pl-4 xl:text-lg xl:font-semibold">
        Informasi Layanan
      </h1>
      <div className="xl:ml-4 ">
        <div className="bg-neutral-100 rounded-md my-2 xl:bg-neutral-100 xl:rounded-md xl:my-2">
          <p className="text-sm p-2 xl:text-sm xl:p-2">
            Diskominfo Kota Bontang menyedian layanan peminjaman ruangan Command Center untuk berbagai keperluan, termasuk rapat dan koordinasi strategis
          </p>
        </div>
        <div className="grid bg-orange-400 my-4 p-4 rounded-md xl:grid xl:grid-flow-row-dense xl:grid-cols-4 xl:grid-rows-1 xl:bg-orange-400 xl:my-4 xl:p-4 xl:rounded-md">
          <div className="relative mb-3 pl-6 xl:relative xl:col-span-3 xl:pl-6">
            <div className="font-semibold text-white xl:font-semibold xl:text-white">Alamat</div>
            <p className="text-sm text-white xl:text-sm xl:text-white">Jalan Bessai Berinta Gedung Graha Taman Praja Blok 1 Lantai 3, <br /> Bontang Lestari Kalimantan Timur Kode Pos 75325</p>
            <IoLocation color="white" size={23} className="absolute top-0 left-0 xl:absolute xl:top-0 xl:left-0" />
          </div>
          <div className="relative pl-6 xl:relative">
            <div className="text-white font-semibold xl:text-white">Telepon</div>
            <Link href="tel:+62 821-4886-2895">
              <div className="bg-white text-xs font-bold rounded-md w-max p-2 mt-1 xl:bg-white xl:text-xs xl:font-bold xl:rounded-md xl:w-max xl:p-2 xl:mt-1">+62 821-4886-2895</div>
            </Link>
            <IoCall color="white" size={20} className="absolute top-0 left-0 xl:absolute xl:top-0.5 xl:-left-6" />
          </div>
        </div>
        <div className="grid grid-cols-1 grid-auto-rows my-4 gap-y-3 xl:grid xl:grid-flow-row-dense xl:grid-cols-4 xl:grid-rows-1 xl:my-8 xl:gap-3">
          <div className="relative order-last grid grid-cols-1 grid-auto-rows p-4 bg-neutral-100 rounded-md xl:relative xl:-order-last xl:grid xl:grid-flow-row-dense xl:grid-cols-2 xl:grid-rows-1 xl:col-span-3 xl:pl-10 xl:py-4 xl:bg-neutral-100 xl:rounded-md xl:p-0">
            <div className="pl-8 mb-2 xl:pl-2 xl:mb-2">
              <h2 className="font-semibold xl:font-semibold">Jam Oprasional</h2>
              <IoTimeOutline color="gray" size={23} className="absolute top-4 left-4 xl:absolute xl:top-4 xl:left-4" />
              <div className="grid mt-1 xl:grid xl:mt-1">
                <table className="text-sm xl:text-sm">
                  <tbody>
                    <tr>
                      <td>Senin</td>
                      <td>07.30 - 16.00</td>
                    </tr>

                    <tr>
                      <td>Selasa</td>
                      <td>07.30 - 16.00</td>
                    </tr>

                    <tr>
                      <td>Rabu</td>
                      <td>07.30 - 16.00</td>
                    </tr>

                    <tr>
                      <td>Kamis</td>
                      <td>07.30 - 16.00</td>
                    </tr>

                    <tr>
                      <td>Jumat</td>
                      <td>07.30 - 16.00</td>
                    </tr>

                    <tr>
                      <td>Sabtu</td>
                      <td>Libur</td>
                    </tr>

                    <tr>
                      <td>Minggu</td>
                      <td>Libur</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <div className="relative border-t-2 border-t-gray-200 pl-8 pt-2 xl:relative xl:border-l-2 xl:border-l-gray-200 xl:pl-9 xl:border-t-0 xl:pt-2">
              <div className="font-semibold xl:font-semibold">Tarif Layanan</div>
              <div className="text-sm mt-1 xl:text-sm xl:mt-1">Gratis</div>
              <IoTicketOutline color="gray" size={20} className="absolute top-2 left-0 xl:absolute xl:top-2 xl:left-2" />
            </div>
          </div>

          <div className="border-2 border-neutral-100 rounded-md p-4 h-fit min-w-full xl:border-2 xl:border-neutral-100 xl:rounded-md xl:p-4">
            <Link href="/command-center/pengajuan-layanan">
              <div className="bg-sky-950 px-5 py-2 rounded-md xl:bg-sky-950 xl:px-5 xl:py-2 xl:rounded-md">
                <div className="relative flex justify-between xl:relative xl:flex">
                  <div>
                    <p className="text-white text-xs font-semibold xl:text-white xl:text-xs xl:font-semibold">Link Akses</p>
                    <p className="text-white text-sm xl:text-white xl:text-sm">Tautan Layanan</p>
                  </div>
                  <IoLink color="white" size={30} className="mt-1 xl:absolute xl:top-1 xl:right-0" />
                </div>
              </div>
            </Link>
          </div>
        </div>

        <div className="py-5 xl:py-0">
          <h1 className="border-l-4 border-orange-400 pl-4 text-lg font-semibold xl:border-l-4 xl:border-orange-400 xl:pl-4 xl:text-lg xl:font-semibold">
            Persyaratan
          </h1>

          <div className="xl:ml-4 ">
            {/* <div className="flex bg-neutral-100 rounded-md my-2 xl:flex xl:bg-neutral-100 xl:rounded-md xl:my-2">
              <IoEllipse color="orange" className="m-2.5 xl:m-2.5" />
              <h3 className="text-sm p-2 xl:text-sm xl:p-2">Khusus ASN - Aparatur Sipil Negara</h3>
            </div> */}

            <div className="flex bg-neutral-100 rounded-md my-2 xl:flex xl:bg-neutral-100 xl:rounded-md xl:my-2">
              <IoEllipse color="orange" className="m-2.5 xl:m-2.5" />
              <h3 className="text-sm p-2 xl:text-sm xl:p-2">
                Permohonan Tertulis <br /> <span className="text-xs xl:text-xs"> Format Permohonan bisa di <a href="https://igaegengprn3scvr.public.blob.vercel-storage.com/tamplate%20surat%20peminjaman-sVswsZNCJuAYtMhNLppCBD4QO74WFW.pdf" className="text-orange-400 xl:text-orange-400">unduh disini</a> </span>
              </h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CardLayananCC;
