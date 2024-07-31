import { getUserCount } from '@/lib/actions';
import { NextResponse } from 'next/server';

export async function GET() {
  try {
    const count = await getUserCount();
    return NextResponse.json({ count });
  } catch (error) {
    return NextResponse.error();
  }
}
