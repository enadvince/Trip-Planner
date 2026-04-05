import Link from 'next/link';

export default function ExplorePage() {
  return (
    <section className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold">Explore</h1>
        <p className="mt-2 text-slate-600">
          Search hotels, activities, and food options from your travel database.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        <Link href="/explore/hotels" className="rounded-2xl bg-white p-6 shadow-sm transition hover:shadow-md">
          <h2 className="text-xl font-semibold">Hotels</h2>
          <p className="mt-2 text-sm text-slate-600">Browse accommodations by area, price, and type.</p>
        </Link>

        <Link href="/explore/activities" className="rounded-2xl bg-white p-6 shadow-sm transition hover:shadow-md">
          <h2 className="text-xl font-semibold">Activities</h2>
          <p className="mt-2 text-sm text-slate-600">Find tours, attractions, and experiences.</p>
        </Link>

        <Link href="/explore/foods" className="rounded-2xl bg-white p-6 shadow-sm transition hover:shadow-md">
          <h2 className="text-xl font-semibold">Foods</h2>
          <p className="mt-2 text-sm text-slate-600">See restaurants, dishes, cafes, and food spots.</p>
        </Link>
      </div>
    </section>
  );
}