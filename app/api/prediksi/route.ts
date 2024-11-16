import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

// GET: Fetch all predictions
export async function GET(req: NextRequest) {
  try {
    const predictions = await prisma.prediksi.findMany();
    return NextResponse.json(predictions, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: 'Gagal mengambil data prediksi' }, { status: 500 });
  }
}

// POST: Create a new prediction
export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { thnsatu, thndua, thntiga, thnempat, tahunlima } = body;

    if (!thnsatu || !thndua || !thntiga || !thnempat || !tahunlima) {
      return NextResponse.json({ error: 'Semua field harus diisi' }, { status: 400 });
    }

    const newPrediction = await prisma.prediksi.create({
      data: { thnsatu, thndua, thntiga, thnempat, tahunlima },
    });

    return NextResponse.json(newPrediction, { status: 201 });
  } catch (error) {
    return NextResponse.json({ error: 'Gagal membuat data prediksi' }, { status: 500 });
  }
}

// PUT: Update a prediction by ID
export async function PUT(req: NextRequest) {
  try {
    const body = await req.json();
    const { id, thnsatu, thndua, thntiga, thnempat, tahunlima } = body;

    if (!id) {
      return NextResponse.json({ error: 'ID harus disediakan' }, { status: 400 });
    }

    const updatedPrediction = await prisma.prediksi.update({
      where: { id },
      data: { thnsatu, thndua, thntiga, thnempat, tahunlima },
    });

    return NextResponse.json(updatedPrediction, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: 'Gagal mengupdate data prediksi' }, { status: 500 });
  }
}

// DELETE: Delete a prediction by ID
export async function DELETE(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url);
    const id = searchParams.get('id');

    if (!id) {
      return NextResponse.json({ error: 'ID harus disediakan' }, { status: 400 });
    }

    await prisma.prediksi.delete({
      where: { id },
    });

    return NextResponse.json({ message: 'Data prediksi berhasil dihapus' }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: 'Gagal menghapus data prediksi' }, { status: 500 });
  }
}
