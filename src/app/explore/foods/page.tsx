import { getFoods } from '@/lib/sheets/foods';
import FoodsBrowser from '@/components/explore/FoodsBrowser';

export default async function FoodsPage() {
  const foods = await getFoods();

  return (
    <section className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold">Foods</h1>
        <p className="mt-2 text-slate-600">
          Live food data from your Google Sheets.
        </p>
      </div>

      <FoodsBrowser foods={foods} />
    </section>
  );
}