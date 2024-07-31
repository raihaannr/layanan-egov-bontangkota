// lib/format-date.ts

const formatDateToID = (date: string | Date) => {
  // Ensure date is a Date object
  const dateObj = new Date(date);

  // Convert to ISO string to avoid time zone issues
  const isoString = dateObj.toISOString();

  const options: Intl.DateTimeFormatOptions = {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
  };

  return new Intl.DateTimeFormat('id-ID',   
 options).format(new Date(isoString));
};

export default formatDateToID;