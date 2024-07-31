const formatTanggal = (tanggal: string | Date) => {
    // Pastikan tanggal adalah objek Date
    const date = new Date(tanggal);
  
    // Ambil komponen tanggal dan waktu
    const day = date.getDate().toString().padStart(2, '0');
    const month = (date.getMonth() + 1).toString().padStart(2, '0');
    const year = date.getFullYear();
    const   
   hours = date.getHours().toString().padStart(2, '0');
    const minutes = date.getMinutes().toString().padStart(2,   
   '0');
  
    // Gabungkan komponen menjadi format yang diinginkan
    return `${day}/${month}/${year} ${hours}.${minutes}`;
  };

  export default formatTanggal;