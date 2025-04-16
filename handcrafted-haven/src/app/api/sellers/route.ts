// /app/api/sellers/route.ts
import { NextResponse } from 'next/server';
import  postgres  from 'postgres';

const sql = postgres(process.env.POSTGRES_URL!, { ssl: 'require' });

export async function GET() {
  try {
    const result = await sql`SELECT id, name FROM users WHERE type = 'seller';`;
    return NextResponse.json(result);
  } catch (error) {
    return NextResponse.json({ error: 'Failed to fetch sellers' }, { status: 500 });
  }
}