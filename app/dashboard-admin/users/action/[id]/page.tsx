import DetailActionUser from "@/components/detail-action-user";
import Footer from "@/components/footer"
import Navbar from "@/components/navbar"
import { getUsersById } from "@/lib/data";
import { notFound } from "next/navigation";

const ActionAdminUser = async ({ params }: { params: { id: string } }) => {
    const data = await getUsersById(params.id);
    if (!data) return notFound();

  return (
    <div>
      <header>
        <div className='fixed top-0 left-0 right-0 z-50'>
          <Navbar />
        </div>
      </header>

      <main>
        <DetailActionUser data={data} />
      </main>

      <footer>
        <div>
            <Footer />
        </div>
      </footer>
    </div>
  )
}

export default ActionAdminUser