import type { Food } from '@/types/food';
import { sheets, SPREADSHEET_ID } from './client';

export async function getFoods(): Promise<Food[]> {
  const res = await sheets.spreadsheets.values.get({
    spreadsheetId: SPREADSHEET_ID,
    range: 'Foods!A2:Z',
  });

  const rows = res.data.values || [];

  return rows.map((row) => ({
    id: row[0] ?? '',
    name: row[1] ?? '',
    area: row[2] ?? '',
    budget: row[3] ?? '',
    cuisine: row[4] ?? '',
  }));
}