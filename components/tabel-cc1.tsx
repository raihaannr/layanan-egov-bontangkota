import { getAllPemesanan } from "@/lib/actions";
import TabelCC1Client from "@/components/tabel-cc-client";

const TabelCC1 = async () => {
  const { result, message } = await getAllPemesanan();

  if (message) {
    return <div className="h-screen flex items-center justify-center"><p className="text-red-500">{message}</p></div>;
  }

  return <TabelCC1Client pemesanan={result} />;
};

export default TabelCC1;
