"use client"

import React from 'react';

export default function Calendar() {
  return (
    <div className="calendar-container">
      <iframe
        src="https://calendar.google.com/calendar/embed?height=600&wkst=1&ctz=Asia%2FBangkok&bgcolor=%23ffffff&showTitle=0&showNav=0&showDate=0&showPrint=0&showTabs=0&showCalendars=0&src=aW1wYWN0cGFsLnRoQGdtYWlsLmNvbQ&color=%23039BE5"
        className="border border-neutral-300 rounded-lg w-full h-[500px] md:h-[600px] shadow-md"
        frameBorder="0"
        scrolling="no"
        title="Impact Pal Event Calendar"
      />
    </div>
  );
}