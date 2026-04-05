import type { Activity } from '@/types/activity';
import { sheets, SPREADSHEET_ID } from './client';

export async function getActivities(): Promise<Activity[]> {
  const res = await sheets.spreadsheets.values.get({
    spreadsheetId: SPREADSHEET_ID,
    range: 'Activities!A2:Z',
  });

  const rows = res.data.values || [];

  return rows.map((row) => ({
    id: row[0] ?? '',
    name: row[1] ?? '',
    area: row[2] ?? '',
    cost: Number(row[3] ?? 0),
    category: row[4] ?? '',
  }));
}