'use client'
import React from "react";

const VideoPanduan = () => {
  return (
    <div className="w-full h-auto bg-white shadow-lg mx-auto rounded-2xl px-5 :pb-10 pt-5 xl:w-full xl:h-auto xl:bg-white xl:shadow-lg xl:mx-auto xl:rounded-2xl xl:px-10 xl:pb-10 xl:pt-5">
      <iframe
        width="100%"
        height={500}
        src="https://www.youtube.com/embed/wNZL-n4Z980?si=TIdLxfpDr6wUT7TX"
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default VideoPanduan;
