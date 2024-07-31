import Footer from "@/components/footer"
import Navbar from "@/components/navbar"
import TabelCC1 from "@/components/tabel-cc1"

const DashboardAdminCC = () => {
  return (
    <div>
      <header>
        <div className='fixed top-0 left-0 right-0 z-50'>
          <Navbar />
        </div>
      </header>

      <main className="xl:pb-5">
        <TabelCC1 />
      </main>

      <footer className="xl:block hidden">
        <div>
            <Footer />
        </div>
      </footer>
    </div>
  )
}

export default DashboardAdminCC