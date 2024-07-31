const formatTanggal = (tanggal: string | Date) => {
    // Pastikan tanggal adalah objek Date
    const date = new Date(tanggal);
  
    // Konversi tanggal ke format ISO
    const isoString = date.toISOString();
  
    // Ambil komponen dari string ISO
    const [datePart, timePart] = isoString.split('T');
    const [year, month, day] = datePart.split('-');
    const [hours, minutes] = timePart.split(':');
  
    // Gabungkan komponen menjadi format yang diinginkan
    return `${day}/${month}/${year} ${hours}.${minutes}`;
  };
  
  export default formatTanggal;
  