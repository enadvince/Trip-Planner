import { getFoods } from '@/lib/sheets/foods';

export default async function FoodsPage() {
  const foods = await getFoods();

  return (
    <section className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold">Foods</h1>
        <p className="mt-2 text-slate-600">Live food data from your Google Sheets.</p>
      </div>

      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {foods.map((food) => (
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