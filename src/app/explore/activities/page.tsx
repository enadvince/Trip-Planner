const mockActivities = [
  { id: '1', name: 'Island Hopping', area: 'Mactan', cost: 1500, category: 'Adventure' },
  { id: '2', name: 'City Food Tour', area: 'Cebu City', cost: 900, category: 'Food' },
  { id: '3', name: 'Temple + Tops Tour', area: 'Busay', cost: 700, category: 'Sightseeing' },
];

export default function ActivitiesPage() {
  return (
    <section className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold">Activities</h1>
        <p className="mt-2 text-slate-600">Browse activities and later connect filters to your sheet data.</p>
      </div>

      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {mockActivities.map((activity) => (
          <article key={activity.id} className="rounded-2xl bg-white p-5 shadow-sm">
            <div className="flex items-start justify-between gap-4">
              <div>
                <h2 className="text-lg font-semibold">{activity.name}</h2>
                <p className="text-sm text-slate-500">{activity.area}</p>
              </div>
              <span className="rounded-full bg-sky-50 px-3 py-1 text-xs font-medium text-sky-700">
                {activity.category}
              </span>
            </div>

            <p className="mt-4 text-sm text-slate-600">Estimated cost: ₱{activity.cost.toLocaleString()}</p>
          </article>
        ))}
      </div>
    </section>
  );
}