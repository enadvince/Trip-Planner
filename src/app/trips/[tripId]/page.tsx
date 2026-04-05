interface TripDetailPageProps {
  params: {
    tripId: string;
  };
}

export default function TripDetailPage({ params }: TripDetailPageProps) {
  return (
    <section className="space-y-6">
      <div className="rounded-3xl bg-white p-6 shadow-sm">
        <p className="text-sm font-medium text-sky-600">Trip ID: {params.tripId}</p>
        <h1 className="mt-2 text-3xl font-bold">Sample Trip Title</h1>
        <p className="mt-2 text-slate-600">This page will show the selected hotel, activities, food, logistics, and attendees.</p>
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
        <div className="rounded-2xl bg-white p-6 shadow-sm">
          <h2 className="text-xl font-semibold">Attendees</h2>
          <ul className="mt-3 space-y-2 text-sm text-slate-600">
            <li>Vince - Owner</li>
            <li>Friend 1 - Editor</li>
            <li>Friend 2 - Viewer</li>
          </ul>
        </div>

        <div className="rounded-2xl bg-white p-6 shadow-sm">
          <h2 className="text-xl font-semibold">Budget Summary</h2>
          <p className="mt-3 text-sm text-slate-600">Total budget: ₱20,000</p>
          <p className="mt-1 text-sm text-slate-600">Estimated spend: ₱16,500</p>
        </div>

        <div className="rounded-2xl bg-white p-6 shadow-sm">
          <h2 className="text-xl font-semibold">Selected Hotel</h2>
          <p className="mt-3 text-sm text-slate-600">No hotel selected yet.</p>
        </div>

        <div className="rounded-2xl bg-white p-6 shadow-sm">
          <h2 className="text-xl font-semibold">Activities</h2>
          <p className="mt-3 text-sm text-slate-600">No activities added yet.</p>
        </div>

        <div className="rounded-2xl bg-white p-6 shadow-sm lg:col-span-2">
          <h2 className="text-xl font-semibold">Logistics & Notes</h2>
          <p className="mt-3 text-sm text-slate-600">Store transport details, meeting points, reminders, and notes here.</p>
        </div>
      </div>
    </section>
  );
}