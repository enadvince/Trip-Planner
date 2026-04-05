import { getHotels } from '@/lib/sheets/hotels';
import HotelsBrowser from '@/components/explore/HotelsBrowser';

export default async function HotelsPage() {
  const hotels = await getHotels();

  return (
    <section className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold">Hotels</h1>
        <p className="mt-2 text-slate-600">Live data from your Google Sheets</p>
      </div>

      <HotelsBrowser hotels={hotels} />
    </section>
  );
}