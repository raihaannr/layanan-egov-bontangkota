import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <div className='relative bg-green-950 h-96 xl:relative xl:container xl:bg-green-950 xl:max-w-full xl:h-60'>
      <img className="absolute object-cover h-96 xl:absolute xl:h-60 w-full" src="/el3.png" />
      <div className="relative top-8 mx-auto xl:relative xl:top-8 xl:max-w-screen-xl xl:mx-auto">
        <div className="relative mx-5 xl:relative xl:flex">
          <div className="xl:flex-1 xl:container">
            <div className="flex gap-1.5 xl:gap-1.5">
              <Image
                src="/pemkot.png"
                width={45}
                height={45}
                alt="Logo Diskominfo btg"
              />
              <Image
                src="/diskominfobtg.png"
                width={150}
                height={20}
                alt="Logo Diskominfo btg"
              />
            </div>
            <div className="text-sm text-white mt-2">Pemerintah Kota Bontang</div>
            <div className="text-xl text-white font-bold">Dinas Komunikasi dan Informasi</div>
            <div className="text-xs text-white mt-1">Jalan Bessai Berinta Gedung Graha Taman Praja Blok 1 Lantai 3, Bontang Lestari Kalimantan Timur Kode Pos 75325</div>
          </div>
          <div className="flex-1 mt-3 xl:container">
            <div className="relative pl-8 text-white xl:pl-20 xl:text-white">Surel
              <img src="/fic1.png" alt="icon email" className="absolute left-0 bottom-0 xl:left-12 xl:bottom-0" />
            </div>
            <a href="mailto:diskominfobontang01@gmail.com" className="text-white xl:text-white text-sm xl:pl-20">diskominfobontang01@gmail.com</a>
          </div>
          <div className="mt-3 xl:flex-1">
            <div className="xl:pl-20 text-white">Media Sosial</div>
            <div className="flex pt-2 gap-2 xl:pl-20 xl:pt-2">
              <Link href="https://www.facebook.com/kominfo.kominfo.923">
                <img src="/fic2.png" alt="icon facebook" />
              </Link>
              <Link href="https://https://twitter.com/kominfo_btg">
                <img src="/fic3.png" alt="icon X" />
              </Link>
              <Link href="https://www.instagram.com/diskominfo_btg">
                <img src="/fic4.png" alt="icon instagram" />
              </Link>
              <Link href="https://www.youtube.com/c/diskominfokotabontang">
                <img src="/fic5.png" alt="icon youtube" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer;
