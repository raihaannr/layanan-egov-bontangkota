import DetailAction from "@/components/detail-action";
import Footer from "@/components/footer"
import Navbar from "@/components/navbar"
import { getPemesananById } from "@/lib/data";
import { notFound } from "next/navigation";

const ActionAdmin = async ({ params }: { params: { id: string } }) => {
    const data = await getPemesananById(params.id);
    if (!data) return notFound();

  return (
    <div>
      <header>
        <div className='fixed top-0 left-0 right-0 z-50'>
          <Navbar />
        </div>
      </header>

      <main>
        <DetailAction data={data} />
      </main>

      <footer>
        <div className="mt-8">
            <Footer />
        </div>
      </footer>
    </div>
  )
}

export default ActionAdmin