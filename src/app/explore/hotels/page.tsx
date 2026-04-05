const mockHotels = [
  { id: '1', name: 'City Stay Hotel', area: 'Cebu City', price: 2400, type: 'Hotel' },
  { id: '2', name: 'Budget Inn', area: 'Mandaue', price: 1800, type: 'Inn' },
  { id: '3', name: 'Beachfront Suites', area: 'Mactan', price: 4200, type: 'Resort' },
];

export default function HotelsPage() {
  return (
    <section className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold">Hotels</h1>
        <p className="mt-2 text-slate-600">Replace this mock data with your Google Sheets hotel data.</p>
      </div>

      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {mockHotels.map((hotel) => (
          <article key={hotel.id} className="rounded-2xl bg-white p-5 shadow-sm">
            <div className="flex items-start justify-between gap-4">
              <div>
                <h2 className="text-lg font-semibold">{hotel.name}</h2>
                <p className="text-sm text-slate-500">{hotel.area}</p>
              </div>
              <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-medium">
                {hotel.type}
              </span>
            </div>

            <p className="mt-4 text-sm text-slate-600">Starts at ₱{hotel.price.toLocaleString()} per night</p>

            <button className="mt-5 rounded-xl border px-4 py-2 text-sm font-medium">
              View Details
            </button>
          </article>
        ))}
      </div>
    </section>
  );
}