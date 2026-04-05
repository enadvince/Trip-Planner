import { Hotel } from '@/types/hotel';
import { sheets, SPREADSHEET_ID } from './client';

export async function getHotels(): Promise<Hotel[]> {
  const res = await sheets.spreadsheets.values.get({
    spreadsheetId: SPREADSHEET_ID,
    range: 'Hotels!A2:Z',
  });

  const rows = res.data.values || [];

  return rows.map((row) => ({
    id: row[0],       
    name: row[1],
    area: row[2],
    price: Number(row[3]),
    type: row[4],
    }));
}