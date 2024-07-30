import Footer from "@/components/footer"
import Navbar from "@/components/navbar"
import TabelCC1 from "@/components/tabel-cc1"

const DashboardAdmin = () => {
  return (
    <div>
      <header>
        <div className='fixed top-0 left-0 right-0 z-50'>
          <Navbar />
        </div>
      </header>

      <main>
        <TabelCC1 />
      </main>

      <footer>
        <div>
            <Footer />
        </div>
      </footer>
    </div>
  )
}

export default DashboardAdmin