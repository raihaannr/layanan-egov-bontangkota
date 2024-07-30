import Image from 'next/image';
import ButtonLoginRegister from './button-login-register';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/lib/auth';

const Jumbotron = async () => {
  const session = await getServerSession(authOptions)

  return (
    <div className='relative max-w-full h-80 xl:relative xl:container xl:bg-green-950 xl:max-w-full xl:h-96'>
      <img className="absolute object-cover h-80 w-full object-right-top xl:absolute xl:object-cover xl:object-top xl:h-96 xl:w-full rounded-b-xl shadow-md" src="/el1.png" />
      <div className="relative top-20 left-10 bg-white w-fit text-sm pr-4 pl-12 py-1 rounded-full xl:absolute xl:top-24 xl:left-40 xl:container xl:max-w-max xl:bg-white xl:text-sm xl:pr-6 xl:pl-12 xl:py-1 xl:rounded-full">
        Pemerintah Kota Bontang
      </div>
      <div className='relative top-12 left-10 w-fit pt-1.5 pl-4 xl:absolute xl:top-24 xl:left-40 xl:content-center xl:pt-0.5 xl:pl-6'>
        <Image
          src="/pemkot.png"
          width={20}
          height={20}
          alt="Logo Diskominfo btg"
        />
      </div>
      <div className='absolute top-32 left-10 text-3xl font-extrabold text-white xl:absolute xl:top-36 xl:left-40 xl:text-4xl xl:font-extrabold xl:text-white'>
        Layanan Bidang Penyelenggaraan <br /> E-Government
      </div>
      <div className='absolute top-64 left-10 xl:absolute xl:top-60 xl:left-40'>
        <ButtonLoginRegister />
      </div>
      {/* <pre className='text-white absolute top-64 left-40'>{JSON.stringify(session)}</pre> */}
      <div className='xl:block hidden xl:absolute xl:bottom-10 xl:right-32 xl:content-center'>
        <Image
          src="/icon.png"
          width={300}
          height={300}
          alt="Burung Kuntul Perak"
        />
      </div>
    </div>
  )
}

export default Jumbotron;
