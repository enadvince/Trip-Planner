import { Hotel } from '@/types/hotel';
import { sheets, SPREADSHEET_ID } from './client';

export async function getHotels(): Promise<Hotel[]> {
  const res = await sheets.spreadsheets.values.get({
    spreadsheetId: SPREADSHEET_ID,
    range: 'Hotels!A2:Z',
  });

  const rows = res.data.values || [];

  return rows
    .filter((row) => row && row[1]?.trim())
    .map((row) => ({
      id: row[0] ?? '',
      name: row[1] ?? '',
      area: row[2] ?? '',
      country: row[3] ?? '',
      price: row[4] ? Number(row[4]) : 0,
      type: row[5] ?? '',
    }));
}