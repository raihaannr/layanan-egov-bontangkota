import React from 'react';
import TabelCC1Client from '@/components/tabel-cc-client';
import { getAllPemesanan } from '@/lib/actions';

const TabelCC1 = async () => {
  const { pemesanan, message } = await getAllPemesanan();

  if (message) {
    return (
      <div className="h-screen flex items-center justify-center">
        <p className="text-red-500">{message}</p>
      </div>
    );
  }

  return <TabelCC1Client pemesanan={pemesanan} />;
};

export default TabelCC1;
