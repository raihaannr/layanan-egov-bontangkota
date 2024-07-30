'use client'
import React from "react";
import Accordion from "@/components/accordion";

const FAQ = () => {
  return (
    <div className="w-full h-auto bg-white shadow-lg mx-auto rounded-2xl px-5 :pb-10 pt-5 xl:w-full xl:h-auto xl:bg-white xl:shadow-lg xl:mx-auto xl:rounded-2xl xl:px-10 xl:pb-10 xl:pt-5">
      <Accordion
        title="Apa jenis informasi yang dapat saya temukan di Website ini?"
        answer="Anda dapat menemukan berbagai jenis informasi, seperti permohonan layanan pada bidang pengembangan dan E-Goverment secara online."
      />
      <Accordion
        title="Apakah akses ke Website Layanan ini gratis?"
        answer="Ya, akses ke Website Layanan Terintegrasi ini adalah gratis untuk semua warga dan pemangku kepentingan yang ingin mengakses informasi dan layanan pemerintah."
      />
    </div>
  );
};

export default FAQ;