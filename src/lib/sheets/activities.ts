import type { Activity } from '@/types/activity';
import { sheets, SPREADSHEET_ID } from './client';

export async function getActivities(): Promise<Activity[]> {
  const res = await sheets.spreadsheets.values.get({
    spreadsheetId: SPREADSHEET_ID,
    range: 'Activities!A2:E',
  });

  const rows = res.data.values || [];

  return rows
    .filter((row) => row && row[1]?.trim())
    .map((row) => ({
      id: row[0] ?? '',
      name: row[1] ?? '',
      area: row[2] ?? '',
      country: row[3] ?? '',
      cost: row[4] ? Number(row[4]) : 0,
      category: row[5] ?? '',
    }));
}