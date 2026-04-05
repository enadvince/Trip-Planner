'use client';

import { useMemo, useState } from 'react';
import type { Food } from '@/types/food';
import SearchFilterBar from './SearchFilterBar';

type FoodsBrowserProps = {
  foods: Food[];
};

export default function FoodsBrowser({ foods }: FoodsBrowserProps) {
  const [search, setSearch] = useState('');
  const [area, setArea] = useState('');

  const areas = useMemo(
    () => [...new Set(foods.map((food) => food.area).filter(Boolean))].sort(),
    [foods]
  );

  const filteredFoods = useMemo(() => {
    const query = search.trim().toLowerCase();

    return foods.filter((food) => {
      const matchesSearch =
        !query ||
        food.name.toLowerCase().includes(query) ||
        food.area.toLowerCase().includes(query);

      const matchesArea = !area || food.area === area;

      return matchesSearch && matchesArea;
    });
  }, [foods, search, area]);

  return (
    <section className="space-y-6">
      <SearchFilterBar
        searchValue={search}
        onSearchChange={setSearch}
        areaValue={area}
        onAreaChange={setArea}
        areas={areas}
        searchPlaceholder="Search foods by name or area"
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
            <h2 className="text-lg font-semibold">{food.name}</h2>
            <p className="mt-1 text-sm text-slate-500">{food.area}</p>
            <p className="mt-3 text-sm text-slate-600">Cuisine: {food.cuisine}</p>
            <p className="mt-1 text-sm text-slate-600">Budget: {food.budget}</p>
          </article>
        ))}
      </div>
    </section>
  );
}