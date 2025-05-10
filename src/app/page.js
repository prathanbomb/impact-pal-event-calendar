import Calendar from '@/components/Calendar';
import HelpModal from '@/components/HelpModal';

export default function Home() {
  return (
    <main className="flex flex-col justify-center items-center min-h-screen relative p-4">
      <div className="mb-8">
        <h1 className="text-2xl md:text-3xl font-bold text-center mb-2">Impact Pal Event Calendar</h1>
        <p className="text-sm md:text-base text-center text-gray-600">Your source for Social Impact</p>
      </div>

      <Calendar />
      <HelpModal />
    </main>
  );
}
