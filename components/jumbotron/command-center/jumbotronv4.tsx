'use client';
import { usePathname } from 'next/navigation';
import Link from 'next/link';

const JumbotronV4 = () => {
  const pathname = usePathname();
  const pathArray = pathname.split('/').filter(path => path);

  const isLast = pathArray.length > 0 ? pathArray[pathArray.length - 1] : '';

  return (
    <div className='relative max-w-full h-64 xl:relative xl:container xl:bg-green-950 xl:max-w-full xl:h-96'>
      <img className="absolute object-cover object-right-top h-64 w-full xl:absolute rounded-b-xl shadow-md xl:object-cover xl:object-top xl:h-96 xl:w-full" src="/el2.png" alt="Background Image" />
      <div className="relative top-20 max-w-screen-xl text-sm mx-5 xl:relative xl:top-24 xl:max-w-screen-xl xl:text-sm xl:mx-auto">
        <div className='relative text-white xl:relative xl:text-white'>
          <Link href="/">beranda</Link>
          {pathArray.map((path, index) => {
            const href = '/' + pathArray.slice(0, index + 1).join('/');
            const isLast = index === pathArray.length - 1;
            return (
              <span key={href}>
                {' / '}
                {isLast ? (
                  <span>{path}</span>
                ) : (
                  <Link href={href}>{path}</Link>
                )}
              </span>
            );
          })}
        </div>
        <div className="relative mt-5 xl:relative xl:mt-5">
          <h1 className="text-white text-4xl font-bold xl:text-white xl:text-4xl xl:font-bold">FAQ</h1>
          <h1 className="text-white text-sm xl:text-white xl:text-sm">Pertanyaan-pertanyaan umum yang memungkin menjawab pertanyaan Anda.</h1>
        </div>
      </div>
    </div>
  );
}

export default JumbotronV4;
