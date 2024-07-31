import { getPendingPemesananCount } from '@/lib/actions';
import { NextResponse } from 'next/server';

export async function GET() {
  try {
    const count = await getPendingPemesananCount();
    return NextResponse.json({ count });
  } catch (error) {
    return NextResponse.error();
  }
}
