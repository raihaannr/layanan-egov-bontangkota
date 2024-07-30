import ListCard from "./list-card"
import Link from 'next/link'

export const CardLayanan: React.FC = () => {
  const cards = [
    { image: '/icon1.png', title: 'Bontang Bebas Kuota', description: ' layanan Internet Gratis bagi masyarakat Kota Bontang melalui program “Bontang Bebas Kuota', link: '/bontang-bebas-kuota' },
    { image: '/icon2.png', title: 'Bontang Siaga', description: 'layanan emergency call semua informasi terkait kegawatdaruratan dapat tersampaikan dengan baik di seluruh lapisan masyarakat Bontang.', link: '/bontang-siaga' },
    { image: '/icon3.png', title: 'Pembuatan/ Update Website', description: 'Layanan pembuatan dan pembaruan website yang membantu organisasi dan individu di Kota Bontang untuk hadir secara online dengan tampilan yang modern dan fungsional.', link: '/pembuatan-update-website' },
    { image: '/icon4.png', title: 'Pembuatan/ Update Aplikasi', description: 'Layanan pengembangan dan pembaruan aplikasi untuk mendukung berbagai kebutuhan digital masyarakat dan organisasi di Kota Bontang.', link: '/pembuatan-update-aplikasi' },
    { image: '/icon5.png', title: 'Command Center', description: 'Layanan peminjaman ruangan Command Center untuk berbagai keperluan, termasuk rapat dan koordinasi strategis.', link: '/command-center' },
    { image: '/icon6.png', title: 'Video Conference', description: 'Layanan konferensi video untuk memfasilitasi pertemuan dan komunikasi jarak jauh yang efisien dan aman bagi masyarakat dan organisasi di Kota Bontang.', link: '/video-conference' },
    { image: '/icon7.png', title: 'Narasumber TIK', description: 'Layanan penyediaan narasumber teknologi informasi dan komunikasi untuk berbagai acara dan pelatihan di Kota Bontang.', link: '/narasumber-tik' }
  ]

    return (
      <div className="container h-auto mx-auto bg-white shadow-lg px-10 pb-10 pt-5 xl:container xl:w-full xl:h-auto xl:bg-white xl:shadow-lg xl:mx-auto xl:rounded-2xl xl:px-10 xl:pb-10 xl:pt-5">
        <h1 className="border-l-4 border-orange-400 pl-4 mb-5 text-lg font-semibold">
          List Permohonan
        </h1>
        <div className="grid grid-flow-row-dense grid-cols-1 grid-rows-7 xl:grid-cols-3 xl:grid-rows-3 gap-4">
          {cards.map((card, index) => (
            <Link key={index} href={card.link} legacyBehavior>
              <a>
                <ListCard
                  image={card.image}
                  title={card.title}
                  description={card.description}
                />
              </a>
            </Link>
          ))}
        </div>
      </div>
    )
  };
  