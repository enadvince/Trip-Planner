interface SharedTripPageProps {
  params: {
    tripId: string;
  };
}

export default function SharedTripPage({ params }: SharedTripPageProps) {
  return (
    <section className="space-y-6">
      <div className="rounded-3xl bg-white p-6 shadow-sm">
        <h1 className="text-3xl font-bold">Shared Trip View</h1>
        <p className="mt-2 text-slate-600">Trip ID: {params.tripId}</p>
      </div>

      <div className="rounded-2xl bg-white p-6 shadow-sm">
        <h2 className="text-xl font-semibold">Trip Overview</h2>
        <p className="mt-3 text-sm text-slate-600">
          This page is for invited users to view or partially edit a trip depending on their permissions.
        </p>
      </div>
    </section>
  );
}