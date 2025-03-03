import EventCalender from '@/components/EventCalender';

export default function Home() {
  return (
    <div className="mt-15 px-5 flex flex-col gap-5">
      <div className="container mx-auto ">
        <h1 className="text-2xl">Etkinlikler</h1>
      </div>
      <EventCalender />
    </div>
  );
}
