'use client';

import { useEffect, useMemo, useState } from 'react';
import type { Food } from '@/types/food';
import SearchFilterBar from './SearchFilterBar';

type FoodsBrowserProps = {
  foods: Food[];
};

export default function FoodsBrowser({ foods }: FoodsBrowserProps) {
  const [search, setSearch] = useState('');
  const [country, setCountry] = useState('');
  const [area, setArea] = useState('');

  const countries = useMemo(
    () => [...new Set(foods.map((food) => food.country).filter(Boolean))].sort(),
    [foods]
  );

  const areas = useMemo(() => {
    return [
      ...new Set(
        foods
          .filter((food) => !country || food.country === country)
          .map((food) => food.area)
          .filter(Boolean)
      ),
    ].sort();
  }, [foods, country]);

  useEffect(() => {
    setArea('');
  }, [country]);

  const filteredFoods = useMemo(() => {
    const query = search.trim().toLowerCase();

    return foods.filter((food) => {
      const matchesSearch =
        !query ||
        food.name.toLowerCase().includes(query) ||
        food.area.toLowerCase().includes(query) ||
        food.country.toLowerCase().includes(query);

      const matchesCountry = !country || food.country === country;
      const matchesArea = !area || food.area === area;

      return matchesSearch && matchesCountry && matchesArea;
    });
  }, [foods, search, country, area]);

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
        searchPlaceholder="Search foods by name, country, or area"
      />

      <p className="text-sm text-slate-600">
        Showing {filteredFoods.length} food spot{filteredFoods.length !== 1 ? 's' : ''}
      </p>

      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {filteredFoods.map((food) => (
          <article
            key={food.id}
            className="rounded-2xl bg-white p-5 shadow-sm"
          >
            <div className="flex items-start justify-between gap-4">
              <div>
                <h2 className="text-lg font-semibold">{food.name}</h2>
                <p className="mt-1 text-sm text-slate-500">
                  {food.area}, {food.country}
                </p>
              </div>

              <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-medium">
                {food.cuisine}
              </span>
            </div>

            <p className="mt-1 text-sm text-slate-600">
              Budget: {food.budget}
            </p>

            <button className="mt-5 rounded-xl border px-4 py-2 text-sm font-medium">
              View Details
            </button>
          </article>
        ))}
      </div>
    </section>
  );
}