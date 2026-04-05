interface EditTripPageProps {
  params: {
    tripId: string;
  };
}

export default function EditTripPage({ params }: EditTripPageProps) {
  return (
    <section className="space-y-8">
      <div>
        <p className="text-sm font-medium text-sky-600">
          Editing trip: {params.tripId}
        </p>

        <h1 className="mt-2 text-3xl font-bold">Edit Trip</h1>

        <p className="mt-2 text-slate-600">
          Update the trip details, budget, attendees, and selected items here.
        </p>
      </div>

      <form className="grid gap-6 rounded-3xl bg-white p-6 shadow-sm lg:grid-cols-2">
        <div>
          <label htmlFor="trip-name" className="mb-2 block text-sm font-medium">
            Trip Name
          </label>
          <input
            id="trip-name"
            className="w-full rounded-xl border px-4 py-3"
            defaultValue="Sample Trip Title"
          />
        </div>
      </form>
    </section>
  );
}