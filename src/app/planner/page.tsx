export default function PlannerPage() {
  return (
    <section className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold">Trip Planner</h1>
        <p className="mt-2 text-slate-600">
          Start with a simple form, then later connect it to recommendation logic.
        </p>
      </div>

      <form className="grid gap-4 rounded-3xl bg-white p-6 shadow-sm md:grid-cols-2">
        <div>
          <label className="mb-2 block text-sm font-medium">Destination</label>
          <input className="w-full rounded-xl border px-4 py-3" placeholder="e.g. Cebu, Bohol, Tokyo" />
        </div>

        <div>
          <label className="mb-2 block text-sm font-medium">Total Budget</label>
          <input className="w-full rounded-xl border px-4 py-3" placeholder="e.g. 15000" type="number" />
        </div>

        <div>
          <label className="mb-2 block text-sm font-medium">Number of People</label>
          <input className="w-full rounded-xl border px-4 py-3" placeholder="e.g. 4" type="number" />
        </div>

        <div>
          <label htmlFor="travel-style" className="mb-2 block text-sm font-medium">
  Travel Style
</label>

<select
  id="travel-style"
  name="travelStyle"
  className="w-full rounded-xl border px-4 py-3"
>
            <option>Budget</option>
            <option>Midrange</option>
            <option>Premium</option>
          </select>
        </div>

        <div className="md:col-span-2">
          <button type="submit" className="rounded-xl bg-slate-900 px-5 py-3 text-white">
            Generate Suggestions
          </button>
        </div>
      </form>

      <div className="rounded-3xl bg-white p-6 shadow-sm">
        <h2 className="text-xl font-semibold">Suggested Plan</h2>
        <p className="mt-2 text-sm text-slate-600">
          Show recommended hotels, activities, and food options here after wiring up the logic.
        </p>
      </div>
    </section>
  );
}