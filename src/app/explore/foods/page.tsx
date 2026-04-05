const mockFoods = [
  { id: '1', name: 'Larsian BBQ', area: 'Cebu City', budget: '₱200–₱400', cuisine: 'Filipino' },
  { id: '2', name: 'House of Lechon', area: 'Cebu City', budget: '₱300–₱700', cuisine: 'Cebuano' },
  { id: '3', name: 'Cafe by the Beach', area: 'Mactan', budget: '₱250–₱600', cuisine: 'Cafe' },
];

export default function FoodsPage() {
  return (
    <section className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold">Foods</h1>
        <p className="mt-2 text-slate-600">A searchable food database for your destinations.</p>
      </div>

      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {mockFoods.map((food) => (
          <article key={food.id} className="rounded-2xl bg-white p-5 shadow-sm">
            <h2 className="text-lg font-semibold">{food.name}</h2>
            <p className="mt-1 text-sm text-slate-500">{food.area}</p>
            <p className="mt-3 text-sm text-slate-600">Cuisine: {food.cuisine}</p>
            <p className="mt-1 text-sm text-slate-600">Budget: {food.budget}</p>
          </article>
        ))}
      </div>
    </section>
  );
}