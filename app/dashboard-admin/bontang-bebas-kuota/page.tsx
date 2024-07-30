import Footer from "@/components/footer"
import Navbar from "@/components/navbar"
import UnderConstructionAdmin from "@/components/under-construction-admin"

const DashboardAdminBBK = () => {
  return (
    <div>
      <header>
        <div className='fixed top-0 left-0 right-0 z-50'>
          <Navbar />
        </div>
      </header>

      <main>
        <UnderConstructionAdmin />
      </main>

      <footer className="xl:block hidden">
        <div>
            <Footer />
        </div>
      </footer>
    </div>
  )
}

export default DashboardAdminBBK