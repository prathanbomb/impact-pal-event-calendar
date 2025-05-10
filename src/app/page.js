"use client"

import Calendar from '../components/Calendar';
import HelpModal from '../components/HelpModal';

export default function Home() {
  return (
    <main className="flex flex-col justify-center items-center min-h-screen relative p-4">
      <div className="mb-8">
        <h1 className="text-2xl md:text-3xl font-bold text-center mb-2">Impact Pal Event Calendar</h1>
        <p className="text-sm md:text-base text-center text-gray-600">Your source for Social Impact events in Thailand</p>
      </div>
      
      <Calendar />
      <HelpModal />
      
      <footer className="mt-8 text-sm text-center text-gray-500">
        © {new Date().getFullYear()} Impact Pal Thailand
      </footer>
    </main>
  );
}