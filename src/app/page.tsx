import Link from 'next/link';

export default function HomePage() {
  return (
    <section className="space-y-10">
      <div className="rounded-3xl bg-white p-8 shadow-sm">
        <p className="mb-3 text-sm font-semibold uppercase tracking-wide text-sky-600">
          Plan trips faster
        </p>
        <h1 className="max-w-3xl text-4xl font-bold tracking-tight sm:text-5xl">
          Build trips from your hotel, food, and activity database.
        </h1>
        <p className="mt-4 max-w-2xl text-base text-slate-600">
          Search destinations, compare options, set a budget, and share trip plans with friends.
        </p>

        <div className="mt-6 flex flex-wrap gap-3">
          <Link href="/planner" className="rounded-xl bg-slate-900 px-5 py-3 text-white">
            Start Planning
          </Link>
          <Link href="/explore" className="rounded-xl border px-5 py-3">
            Explore Options
          </Link>
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        <div className="rounded-2xl bg-white p-6 shadow-sm">
          <h2 className="text-lg font-semibold">Hotels</h2>
          <p className="mt-2 text-sm text-slate-600">
            Browse stays by destination, price, area, and group size.
          </p>
        </div>
        <div className="rounded-2xl bg-white p-6 shadow-sm">
          <h2 className="text-lg font-semibold">Activities</h2>
          <p className="mt-2 text-sm text-slate-600">
            Find things to do based on budget and travel style.
          </p>
        </div>
        <div className="rounded-2xl bg-white p-6 shadow-sm">
          <h2 className="text-lg font-semibold">Foods</h2>
          <p className="mt-2 text-sm text-slate-600">
            Save restaurants, cafes, and food stops for your trip.
          </p>
        </div>
      </div>
    </section>
  );
}