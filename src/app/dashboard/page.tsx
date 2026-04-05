export default function DashboardPage() {
  return (
    <section className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold">Dashboard</h1>
        <p className="mt-2 text-slate-600">Quick summary of your trips, drafts, and shared plans.</p>
      </div>

      <div className="grid gap-4 md:grid-cols-3">
        <div className="rounded-2xl bg-white p-6 shadow-sm">
          <p className="text-sm text-slate-500">Upcoming Trips</p>
          <p className="mt-2 text-3xl font-bold">3</p>
        </div>
        <div className="rounded-2xl bg-white p-6 shadow-sm">
          <p className="text-sm text-slate-500">Draft Trips</p>
          <p className="mt-2 text-3xl font-bold">5</p>
        </div>
        <div className="rounded-2xl bg-white p-6 shadow-sm">
          <p className="text-sm text-slate-500">Shared With You</p>
          <p className="mt-2 text-3xl font-bold">2</p>
        </div>
      </div>
    </section>
  );
}