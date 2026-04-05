'use client';

type SearchFilterBarProps = {
  searchValue: string;
  onSearchChange: (value: string) => void;

  countryValue: string;
  onCountryChange: (value: string) => void;
  countries: string[];

  areaValue: string;
  onAreaChange: (value: string) => void;
  areas: string[];

  searchPlaceholder?: string;
};

export default function SearchFilterBar({
  searchValue,
  onSearchChange,
  countryValue,
  onCountryChange,
  countries,
  areaValue,
  onAreaChange,
  areas,
  searchPlaceholder = 'Search by name, country, or area',
}: SearchFilterBarProps) {
  return (
    <div className="grid gap-4 rounded-2xl bg-white p-4 shadow-sm md:grid-cols-3">
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
        <label htmlFor="country" className="mb-2 block text-sm font-medium">
          Country
        </label>
        <select
          id="country"
          value={countryValue}
          onChange={(e) => onCountryChange(e.target.value)}
          className="w-full rounded-xl border px-4 py-3"
        >
          <option value="">All Countries</option>
          {countries.map((country) => (
            <option key={country} value={country}>
              {country}
            </option>
          ))}
        </select>
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
          disabled={!areas.length}
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