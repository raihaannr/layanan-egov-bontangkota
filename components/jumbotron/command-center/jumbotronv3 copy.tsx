'use client';
import { usePathname } from 'next/navigation';
import Link from 'next/link';

const JumbotronV3 = () => {
  const pathname = usePathname();
  const pathArray = pathname.split('/').filter(path => path);

  const isLast = pathArray.length > 0 ? pathArray[pathArray.length - 1] : '';

  return (
    <div className='relative max-w-full h-32 xl:relative xl:container xl:bg-green-950 xl:max-w-full xl:h-60'>
      <img className="absolute object-cover object-top h-32 w-full rounded-xl shadow-md xl:absolute xl:object-cover xl:object-top xl:h-60 xl:w-full" src="/el2.png" alt="Background Image" />
      <div className="relative top-14 p-5 max-w-screen-xl text-sm mx-auto xl:relative xl:top-24 xl:max-w-screen-xl xl:text-sm xl:mx-auto">
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
      </div>
    </div>
  );
}

export default JumbotronV3;