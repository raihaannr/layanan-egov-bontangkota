import { NextResponse } from 'next/server';
import { getUserCount } from '@/lib/actions';

export async function GET() {
  const { count, message } = await getUserCount();

  if (message) {
    return NextResponse.json({ message }, { status: 500 });
  }

  return NextResponse.json({ count }, { status: 200 });
}
