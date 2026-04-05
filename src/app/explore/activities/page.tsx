import { getActivities } from '@/lib/sheets/activities';
import ActivitiesBrowser from '@/components/explore/ActivitiesBrowser';

export default async function ActivitiesPage() {
  const activities = await getActivities();

  return (
    <section className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold">Activities</h1>
        <p className="mt-2 text-slate-600">
          Live activity data from your Google Sheets.
        </p>
      </div>

      <ActivitiesBrowser activities={activities} />
    </section>
  );
}