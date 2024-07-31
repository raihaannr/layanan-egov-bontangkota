'use client';

import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';
import localeId from '@fullcalendar/core/locales/id';
import { useState, useEffect } from 'react';
import listPlugin from '@fullcalendar/list';
import ModalDesk from './modal-desk';
import { getAllPemesanan } from '@/lib/actions';

interface CustomEvent {
  title: string;
  start: string;
  end: string;
  status: 'Diajukan' | 'Disetujui' | 'Ditolak' | 'Dibatalkan';
  backgroundColor?: string;
  borderColor?: string;
}

const FullCalendarComponent: React.FC = () => {
  const getStatusColor = (status: 'Diajukan' | 'Disetujui' | 'Ditolak' | 'Dibatalkan'): string => {
    switch (status) {
      case 'Diajukan':
        return '#ffcc00'; // Orange
      case 'Disetujui':
        return '#378006'; // Green
      case 'Ditolak':
        return '#ff0000'; // Red
      case 'Dibatalkan':
        return '#808080'; // Gray
      default:
        return '#378006'; // Default color
    }
  };

  const [events, setEvents] = useState<CustomEvent[]>([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState<CustomEvent | null>(null);

  useEffect(() => {
    const fetchEvents = async () => {
      const { pemesanan } = await getAllPemesanan();
      const enhancedEvents = pemesanan.map((event: any) => ({
        title: `${event.keperluan} - ${event.ruangan}`,
        start: event.pinjam,
        end: event.selesai,
        status: event.status,
        pemohon: event.pemohon,
        instansi: event.instansi,
        keperluan: event.keperluan,
        ruangan: event.ruangan,
        surat: event.surat,
        backgroundColor: getStatusColor(event.status),
        borderColor: getStatusColor(event.status),
      }));
      setEvents(enhancedEvents);
    };

    fetchEvents();
  }, []);

  const handleEventClick = (clickInfo: any) => {
    setSelectedEvent(clickInfo.event);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedEvent(null);
  };

  return (
    <>
      <FullCalendar
        plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin, listPlugin]}
        initialView={"listMonth"}
        headerToolbar={{
          start: "title",
          end: "prev,nex",
        }}
        events={events}
        height="auto"
        locale={localeId}
        dayMaxEventRows={3}
        eventClick={handleEventClick}
      />
      {isModalOpen && selectedEvent && (
        <ModalDesk onClose={closeModal} event={selectedEvent} />
      )}
    </>
  );
};

export default FullCalendarComponent;
