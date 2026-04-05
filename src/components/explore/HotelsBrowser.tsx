'use client';

import { useMemo, useState } from 'react';
import type { Hotel } from '@/types/hotel';
import SearchFilterBar from './SearchFilterBar';

type HotelsBrowserProps = {
  hotels: Hotel[];
};

export default function HotelsBrowser({ hotels }: HotelsBrowserProps) {
  const [search, setSearch] = useState('');
  const [area, setArea] = useState('');

  const areas = useMemo(
    () =>
      [...new Set(hotels.map((hotel) => hotel.area).filter(Boolean))].sort(),
    [hotels]
  );

  const filteredHotels = useMemo(() => {
    const query = search.trim().toLowerCase();

    return hotels.filter((hotel) => {
      const matchesSearch =
        !query ||
        hotel.name.toLowerCase().includes(query) ||
        hotel.area.toLowerCase().includes(query);

      const matchesArea = !area || hotel.area === area;

      return matchesSearch && matchesArea;
    });
  }, [hotels, search, area]);

  return (
    <section className="space-y-6">
      <SearchFilterBar
        searchValue={search}
        onSearchChange={setSearch}
        areaValue={area}
        onAreaChange={setArea}
        areas={areas}
        searchPlaceholder="Search hotels by name or area"
      />

      <p className="text-sm text-slate-600">
        Showing {filteredHotels.length} hotel{filteredHotels.length !== 1 ? 's' : ''}
      </p>

      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {filteredHotels.map((hotel) => (
          <article
            key={hotel.id}
            className="rounded-2xl bg-white p-5 shadow-sm"
          >
            <div className="flex items-start justify-between gap-4">
              <div>
                <h2 className="text-lg font-semibold">{hotel.name}</h2>
                <p className="text-sm text-slate-500">{hotel.area}</p>
              </div>

              <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-medium">
                {hotel.type}
              </span>
            </div>

            {hotel.price > 0 && (
              <p className="mt-4 text-sm text-slate-600">
                Starts at ₱{hotel.price.toLocaleString()} per night
              </p>
            )}

            <button className="mt-5 rounded-xl border px-4 py-2 text-sm font-medium">
              View Details
            </button>
          </article>
        ))}
      </div>
    </section>
  );
}