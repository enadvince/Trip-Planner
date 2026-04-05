import type { Food } from '@/types/food';
import { sheets, SPREADSHEET_ID } from './client';

export async function getFoods(): Promise<Food[]> {
  const res = await sheets.spreadsheets.values.get({
    spreadsheetId: SPREADSHEET_ID,
    range: 'Foods!A2:E',
  });

  const rows = res.data.values || [];

  return rows
    .filter((row) => row && row[1]?.trim())
    .map((row) => ({
      id: row[0] ?? '',
      name: row[1] ?? '',
      area: row[2] ?? '',
      country: row[3] ?? '',
      budget: row[4] ?? '',
      cuisine: row[5] ?? '',
    }));
}