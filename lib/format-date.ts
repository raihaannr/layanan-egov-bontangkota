// lib/format-date.ts

const formatDateToID = (date: string | Date) => {
  const options: Intl.DateTimeFormatOptions = {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
    timeZone: 'Asia/Makassar',
    timeZoneName: 'short'
  };
  return new Intl.DateTimeFormat('id-ID', options).format(new Date(date));
};

export default formatDateToID;
