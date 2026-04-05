'use client';

type SearchFilterBarProps = {
  searchValue: string;
  onSearchChange: (value: string) => void;
  areaValue: string;
  onAreaChange: (value: string) => void;
  areas: string[];
  searchPlaceholder?: string;
};

export default function SearchFilterBar({
  searchValue,
  onSearchChange,
  areaValue,
  onAreaChange,
  areas,
  searchPlaceholder = 'Search by name or area',
}: SearchFilterBarProps) {
  return (
    <div className="grid gap-4 rounded-2xl bg-white p-4 shadow-sm md:grid-cols-[1fr_220px]">
      <div>
        <label htmlFor="search" className="mb-2 block text-sm font-medium">
          Search
        </label>
        <input
          id="search"
          type="text"
          value={searchValue}
          onChange={(e) => onSearchChange(e.target.value)}
          placeholder={searchPlaceholder}
          className="w-full rounded-xl border px-4 py-3"
        />
      </div>

      <div>
        <label htmlFor="area" className="mb-2 block text-sm font-medium">
          Area
        </label>
        <select
          id="area"
          value={areaValue}
          onChange={(e) => onAreaChange(e.target.value)}
          className="w-full rounded-xl border px-4 py-3"
        >
          <option value="">All Areas</option>
          {areas.map((area) => (
            <option key={area} value={area}>
              {area}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}