'use client';

import { useEffect, useMemo, useState } from 'react';
import type { Activity } from '@/types/activity';
import SearchFilterBar from './SearchFilterBar';

type ActivitiesBrowserProps = {
  activities: Activity[];
};

export default function ActivitiesBrowser({
  activities,
}: ActivitiesBrowserProps) {
  const [search, setSearch] = useState('');
  const [country, setCountry] = useState('');
  const [area, setArea] = useState('');

  const countries = useMemo(
    () =>
      [...new Set(activities.map((activity) => activity.country).filter(Boolean))].sort(),
    [activities]
  );

  const areas = useMemo(() => {
    return [
      ...new Set(
        activities
          .filter((activity) => !country || activity.country === country)
          .map((activity) => activity.area)
          .filter(Boolean)
      ),
    ].sort();
  }, [activities, country]);

  useEffect(() => {
    setArea('');
  }, [country]);

  const filteredActivities = useMemo(() => {
    const query = search.trim().toLowerCase();

    return activities.filter((activity) => {
      const matchesSearch =
        !query ||
        activity.name.toLowerCase().includes(query) ||
        activity.area.toLowerCase().includes(query) ||
        activity.country.toLowerCase().includes(query);

      const matchesCountry = !country || activity.country === country;
      const matchesArea = !area || activity.area === area;

      return matchesSearch && matchesCountry && matchesArea;
    });
  }, [activities, search, country, area]);

  return (
    <section className="space-y-6">
      <SearchFilterBar
        searchValue={search}
        onSearchChange={setSearch}
        countryValue={country}
        onCountryChange={setCountry}
        countries={countries}
        areaValue={area}
        onAreaChange={setArea}
        areas={areas}
        searchPlaceholder="Search activities by name, country, or area"
      />

      <p className="text-sm text-slate-600">
        Showing {filteredActivities.length}{' '}
        {filteredActivities.length === 1 ? 'activity' : 'activities'}
      </p>

      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {filteredActivities.map((activity) => (
          <article
            key={activity.id}
            className="rounded-2xl bg-white p-5 shadow-sm"
          >
            <div className="flex items-start justify-between gap-4">
              <div>
                <h2 className="text-lg font-semibold">{activity.name}</h2>
                <p className="text-sm text-slate-500">
                  {activity.area}, {activity.country}
                </p>
              </div>

              <span className="rounded-full bg-sky-50 px-3 py-1 text-xs font-medium text-sky-700">
                {activity.category}
              </span>
            </div>

            {activity.cost > 0 && (
              <p className="mt-4 text-sm text-slate-600">
                Estimated cost: ₱{activity.cost.toLocaleString()}
              </p>
            )}
          </article>
        ))}
      </div>
    </section>
  );
}