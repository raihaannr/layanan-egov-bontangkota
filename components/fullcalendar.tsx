'use client';

import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';
import localeId from '@fullcalendar/core/locales/id';
import { useState, useEffect } from 'react';
import listPlugin from '@fullcalendar/list';
import ModalDesk from './modal-desk';

interface CustomEvent {
  title: string;
  start: string;
  end: string;
  status: 'Diajukan' | 'Disetujui' | 'Ditolak' | 'Dibatalkan';
  backgroundColor?: string;
  borderColor?: string;
  pemohon?: string;
  instansi?: string;
  keperluan?: string;
  ruangan?: string;
  surat?: string;
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
      try {
        const response = await fetch('/api/events');
        const data = await response.json();
        const enhancedEvents = data.map((event: any) => {
          const start = new Date(event.pinjam).toISOString();
          const end = new Date(event.selesai).toISOString();
          
          return {
            title: `${event.keperluan} - ${event.ruangan}`,
            start,
            end,
            status: event.status,
            pemohon: event.pemohon,
            instansi: event.instansi,
            keperluan: event.keperluan,
            ruangan: event.ruangan,
            surat: event.surat,
            backgroundColor: getStatusColor(event.status),
            borderColor: getStatusColor(event.status),
          };
        });
        setEvents(enhancedEvents);
      } catch (error) {
        console.error('Error fetching events:', error);
      }
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
        initialView={"dayGridMonth"}
        headerToolbar={{
          start: "today prev,next",
          center: "title",
          end: "dayGridMonth,listMonth",
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
