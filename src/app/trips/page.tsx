import Link from 'next/link';

const mockTrips = [
  { id: 'trip-1', name: 'Bohol Barkada Trip', dates: 'May 12 - May 15', status: 'Upcoming' },
  { id: 'trip-2', name: 'Cebu Food Weekend', dates: 'June 1 - June 2', status: 'Draft' },
];

export default function TripsPage() {
  return (
    <section className="space-y-6">
      <div className="flex items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold">Trips</h1>
          <p className="mt-2 text-slate-600">View upcoming, draft, and completed trips.</p>
        </div>

        <button className="rounded-xl bg-slate-900 px-5 py-3 text-white">New Trip</button>
      </div>

      <div className="grid gap-4">
        {mockTrips.map((trip) => (
          <Link
            key={trip.id}
            href={`/trips/${trip.id}`}
            className="rounded-2xl bg-white p-5 shadow-sm transition hover:shadow-md"
          >
            <div className="flex items-center justify-between gap-4">
              <div>
                <h2 className="text-lg font-semibold">{trip.name}</h2>
                <p className="text-sm text-slate-500">{trip.dates}</p>
              </div>
              <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-medium">
                {trip.status}
              </span>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}