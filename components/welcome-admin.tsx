'use client';
import { IoPersonCircle, IoBriefcase, IoPerson } from 'react-icons/io5';
import Link from 'next/link';
import { useEffect, useState } from 'react';

const WelcomeAdmin = () => {
  const [userCount, setUserCount] = useState(0);
  const [pendingPemesananCount, setPendingPemesananCount] = useState(0);

  useEffect(() => {
    const fetchCounts = async () => {
      try {
        const userCountResponse = await fetch('/api/user-count');
        const userCountData = await userCountResponse.json();
        setUserCount(userCountData.count);

        const pendingPemesananCountResponse = await fetch('/api/pending-pemesanan-count');
        const pendingPemesananCountData = await pendingPemesananCountResponse.json();
        setPendingPemesananCount(pendingPemesananCountData.count);
      } catch (error) {
        console.error('Failed to fetch counts', error);
      }
    };

    fetchCounts();
  }, []);

  return (
    <div className="p-5 xl:p-12">
      <div className="bg-white shadow-lg rounded-lg p-4 xl:shadow-md xl:rounded-lg xl:p-12 xl:max-h-svh">
        <h1 className="text-2xl font-bold text-gray-800 mb-4 xl:text-4xl xl:font-bold xl:text-gray-800 xl:mb-6">
          Selamat Datang, Admin
        </h1>
        <div className="xl:grid xl:grid-cols-4 xl:gap-6 xl:mt-8">
          <div className="bg-yellow-500 p-4 rounded-lg xl:bg-yellow-500 xl:p-4 xl:rounded-lg">
            <div className="flex justify-between xl:flex xl:justify-between">
              <div>
                <h1 className="text-6xl font-bold xl:text-6xl xl:font-bold">{userCount}</h1>
                <h1 className="font-semibold xl:font-semibold">Pengguna</h1>
              </div>
              <IoPerson size={60} />
            </div>
          </div>
          <div className="bg-sky-950 p-2 rounded-lg text-white mt-4 xl:mt-0 xl:col-span-3 xl:bg-sky-950 xl:p-4 xl:rounded-lg xl:text-white">
            <div className="xl:grid xl:grid-cols-3 xl:gap-4">
              <div className="border-b-2 border-b-neutral-300 px-4 py-3 xl:py-0 xl:border-r-2 xl:border-b-0 xl:border-r-neutral-300 xl:px-4">
                <div className="flex justify-between xl:flex xl:justify-between xl:pr-2">
                  <div>
                    <h1 className="text-6xl font-bold xl:text-6xl xl:font-bold">{pendingPemesananCount}</h1>
                    <h1 className="font-semibold xl:font-semibold">Pending</h1>
                    <h1 className="text-xs text-neutral-300 xl:text-xs xl:text-neutral-300">
                      peminjaman ruangan command center
                    </h1>
                  </div>
                  <img
                    src="../icon5.png"
                    alt="icon cc"
                    className="w-14 h-14 rounded-lg object-cover xl:w-20 xl:h-14 xl:rounded-lg xl:object-cover"
                  />
                </div>
              </div>
              <div className="border-b-2 border-b-neutral-300 px-4 py-3 xl:py-0 xl:border-r-2 xl:border-b-0 xl:border-r-neutral-300 xl:px-6">
                <div className="flex justify-between xl:flex xl:justify-between">
                  <div>
                    <h1 className="text-6xl font-bold xl:text-6xl xl:font-bold">0</h1>
                    <h1 className="font-semibold xl:font-semibold">Pending</h1>
                    <h1 className="text-xs text-neutral-300 xl:text-xs xl:text-neutral-300">
                      permohonan video conference
                    </h1>
                  </div>
                  <img
                    src="../icon6.png"
                    alt="icon vc"
                    className="w-14 h-14 rounded-lg object-cover xl:w-14 xl:h-14 xl:rounded-lg xl:object-cover"
                  />
                </div>
              </div>
              <div className="px-4 py-3 xl:py-0 xl:px-4">
                <div className="flex justify-between xl:flex xl:justify-between xl:pl-2">
                  <div>
                    <h1 className="text-6xl font-bold xl:text-6xl xl:font-bold">0</h1>
                    <h1 className="font-semibold xl:font-semibold">Pending</h1>
                    <h1 className="text-xs text-neutral-300 xl:text-xs xl:text-neutral-300">
                      permohonan narasumber tik
                    </h1>
                  </div>
                  <img
                    src="../icon7.png"
                    alt="icon narasumber tik"
                    className="w-14 h-14 rounded-lg object-cover xl:w-14 xl:h-14 xl:rounded-lg xl:object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <p className="text-gray-600 mt-8 mb-4 xl:text-base xl:text-gray-600 xl:mt-8 xl:mb-3">
          Kami senang Anda bergabung. Gunakan navigasi di bawah ini untuk mengelola tugas dan pengaturan Anda dengan
          efisien.
        </p>
        <div className="grid grid-cols-2 gap-6 xl:grid xl:grid-cols-2 xl:gap-6 xl:mt-5">
          {/* Manajemen Pengguna */}
          <Link href="/dashboard-admin/users">
            <div className="min-h-full bg-yellow-50 shadow-lg rounded-lg p-2 hover:bg-yellow-100 transition-colors xl:bg-yellow-50 xl:shadow-lg xl:rounded-lg xl:p-8 xl:flex xl:items-center xl:space-x-4 xl:hover:bg-yellow-100 xl:transition-colors">
              <IoPersonCircle size={50} className="text-yellow-500 text-36 xl:text-yellow-500 xl:text-36" />
              <div>
                <h2 className="text-base font-bold text-gray-800 xl:text-2xl xl:font-semibold xl:text-gray-800">
                  Manajemen Pengguna
                </h2>
                <p className="text-sm text-gray-500 xl:text-lg xl:text-gray-500">Ubah peran pengguna.</p>
              </div>
            </div>
          </Link>

          {/* Manajemen Layanan */}
          <Link href="/dashboard-admin/command-center">
            <div className="bg-sky-50 shadow-lg rounded-lg p-2 hover:bg-sky-100 transition-colors xl:bg-sky-50 xl:shadow-lg xl:rounded-lg xl:p-8 xl:flex xl:items-center xl:space-x-4 xl:hover:bg-sky-100 xl:transition-colors">
              <IoBriefcase size={50} className="text-sky-950 text-36 xl:text-sky-950 xl:text-36" />
              <div>
                <h2 className="text-base font-bold text-gray-800 xl:text-2xl xl:font-semibold xl:text-gray-800">
                  Manajemen Layanan
                </h2>
                <p className="text-sm text-gray-500 xl:text-lg xl:text-gray-500">Verifikasi layanan yang diajukan pengguna.</p>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default WelcomeAdmin;
