import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

export async function GET(req: NextRequest) {
  try {
    const events = await prisma.pemesanan.findMany();
    return NextResponse.json(events, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: 'Gagal mengambil data events' }, { status: 500 });
  }
}
