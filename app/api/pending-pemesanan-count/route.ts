import { NextResponse } from 'next/server';
import { getPendingPemesananCount } from '@/lib/actions';

export async function GET() {
  const { count, message } = await getPendingPemesananCount();

  if (message) {
    return NextResponse.json({ message }, { status: 500 });
  }

  return NextResponse.json({ count }, { status: 200 });
}
