import { getDiajukanPemesananCount } from '@/lib/data';
import { NextResponse } from 'next/server';

export async function GET() {
  try {
    const count = await getDiajukanPemesananCount();
    return NextResponse.json({ count });
  } catch (error) {
    return NextResponse.error();
  }
}
