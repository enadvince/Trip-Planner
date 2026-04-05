export default function AdminSyncPage() {
  return (
    <section className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold">Sheet Sync</h1>
        <p className="mt-2 text-slate-600">Manage Google Sheets import and validation status.</p>
      </div>

      <div className="rounded-2xl bg-white p-6 shadow-sm">
        <h2 className="text-xl font-semibold">Sync Status</h2>
        <p className="mt-3 text-sm text-slate-600">Last synced: Not connected yet</p>

        <div className="mt-4 flex gap-3">
          <button className="rounded-xl bg-slate-900 px-5 py-3 text-white">Run Sync</button>
          <button className="rounded-xl border px-5 py-3">Validate Tabs</button>
        </div>
      </div>
    </section>
  );
}