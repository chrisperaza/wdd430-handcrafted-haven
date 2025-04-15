// /app/api/sellers/route.ts
import { NextResponse } from 'next/server';
import { getSellers } from '@/app/lib/data';

export async function GET() {
  const sellers = await getSellers();
  return NextResponse.json(sellers);
}