-- CreateTable
CREATE TABLE "Pemesanan" (
    "id" TEXT NOT NULL,
    "pemohon" TEXT NOT NULL,
    "instansi" TEXT NOT NULL,
    "ruangan" TEXT NOT NULL,
    "keperluan" TEXT NOT NULL,
    "pinjam" TIMESTAMP(3) NOT NULL,
    "selesai" TIMESTAMP(3) NOT NULL,
    "surat" TEXT NOT NULL,
    "status" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Pemesanan_pkey" PRIMARY KEY ("id")
);
