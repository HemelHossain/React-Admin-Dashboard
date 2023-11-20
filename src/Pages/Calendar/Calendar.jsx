import React, { useState } from 'react';
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import timeGridPlugin from '@fullcalendar/timegrid'
import interactionPlugin from '@fullcalendar/interaction';

const Calendar = () => {
    const eventData = [
        { title: 'Event 1', start: '2023-11-01'},
        { title: 'Event 2', start: '2023-11-03'},
        { title: 'Event 3', start: '2023-11-08'},
      ];

    const [events, setEvents] = useState(eventData);
    

    const handleEventDrop = (info) => {
        const { event, draggedEl, start, end } = info;
        const updatedEventData = events.map((event) => {
            if (event.id === event.id) {
                return { ...event, start, end };
            }
            return event;
        });
        setEvents(updatedEventData);
    };
    return (
        <div className='mx-auto md:max-w-screen-md dark:text-white'>
            <FullCalendar


                plugins={[dayGridPlugin,

                    timeGridPlugin, interactionPlugin]}
                headerToolbar={{
                    left: 'prev,next today',
                    center: 'title',
                    right: 'dayGridMonth,timeGridWeek,timeGridDay'
      }}
            events={events}
            editable={true}
            droppable={true}
            drop={handleEventDrop}
    />
        </div>
    );
};

export default Calendar;