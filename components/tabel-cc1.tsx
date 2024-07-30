import { getPemesanan } from "@/lib/data";
import TabelCC1Client from "@/components/tabel-cc-client";

const TabelCC1 = async () => {
  const pemesanan = await getPemesanan();

  return (
    <TabelCC1Client pemesanan={pemesanan} />
  );
};

export default TabelCC1;
