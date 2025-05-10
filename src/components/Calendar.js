"use client";

import { useState, useEffect } from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

export default function Calendar() {
  const [events, setEvents] = useState([]);
  const [currentMonth, setCurrentMonth] = useState(new Date());
  const [hoveredEvent, setHoveredEvent] = useState(null);

  useEffect(() => {
    // Replace with your actual data fetching logic
    // This is a placeholder for demonstration purposes
    const fetchEvents = async () => {
      // Example: Fetch events from an API
      // const response = await fetch('/api/events');
      // const data = await response.json();
      // setEvents(data);

      // Placeholder data
      const placeholderEvents = [
        { date: '2024-07-10', title: 'Meeting with Team', description: 'Discuss project progress and goals' },
        { date: '2024-07-15', title: 'Workshop', description: 'Introduction to React - Learn the basics' },
        { date: '2024-07-20', title: 'Another Event', description: 'Some other details about the event' },
      ];
      setEvents(placeholderEvents);
    };

    fetchEvents();
  }, []);

  const daysInMonth = (date) => {
    return new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();
  };

  const firstDayOfMonth = (date) => {
    return new Date(date.getFullYear(), date.getMonth(), 1).getDay();
  };

  const renderCalendar = () => {
    const year = currentMonth.getFullYear();
    const month = currentMonth.getMonth();
    const firstDay = firstDayOfMonth(currentMonth);
    const numDays = daysInMonth(currentMonth);
    const days = [];
    const weekdays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

    // Add weekday headers
    for (let i = 0; i < 7; i++) {
      days.push(
        <div key={`weekday-${i}`} className="p-2 text-center font-medium text-gray-500">
          {weekdays[i]}
        </div>
      );
    }

    // Add blank days for the start of the month
    for (let i = 0; i < firstDay; i++) {
      days.push(<div key={`blank-${i}`} className="p-2"></div>);
    }

    // Add days of the month
    for (let i = 1; i <= numDays; i++) {
      const date = `${year}-${String(month + 1).padStart(2, '0')}-${String(i).padStart(2, '0')}`;
      const eventForDay = events.find(event => event.date === date);
      const isToday =
        i === new Date().getDate() &&
        currentMonth.getMonth() === new Date().getMonth() &&
        currentMonth.getFullYear() === new Date().getFullYear();

      days.push(
        <div
          key={i}
          className={`p-2 text-center rounded-md hover:bg-gray-100 cursor-pointer ${isToday ? 'bg-blue-100' : ''}`}
          onMouseEnter={() => setHoveredEvent(eventForDay)}
          onMouseLeave={() => setHoveredEvent(null)}
        >
          <span className="block text-sm">{i}</span>
          {eventForDay && (
            <div className="mt-1 text-xs bg-blue-200 text-white px-1 py-0.5 rounded-md">
              {eventForDay.title}
            </div>
          )}
        </div>
      );
    }

    return (
      <div className="grid grid-cols-7">
        {days}
      </div>
    );
  };

  const handlePreviousMonth = () => {
    setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() - 1, 1));
  };

  const handleNextMonth = () => {
    setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1, 1));
  };

  const monthYear = currentMonth.toLocaleString('default', { month: 'long', year: 'numeric' });

  return (
    <div className="calendar-container p-4 rounded-lg shadow-md bg-white">
      <div className="flex items-center justify-between mb-4">
        <button
          onClick={handlePreviousMonth}
          className="p-2 rounded-full hover:bg-gray-200 transition-colors duration-150"
        >
          <FaChevronLeft size={20} />
        </button>
        <span className="text-lg font-semibold">{monthYear}</span>
        <button
          onClick={handleNextMonth}
          className="p-2 rounded-full hover:bg-gray-200 transition-colors duration-150"
        >
          <FaChevronRight size={20} />
        </button>
      </div>
      {renderCalendar()}
      {hoveredEvent && (
        <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center pointer-events-none">
          <div className="bg-white p-4 rounded-md shadow-md z-10 pointer-events-auto">
            <h3 className="text-lg font-semibold mb-2">{hoveredEvent.title}</h3>
            <p className="text-sm">{hoveredEvent.description}</p>
          </div>
        </div>
      )}
    </div>
  );
}
