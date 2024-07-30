import Footer from "@/components/footer"
import Navbar from "@/components/navbar"
import UserTable from "@/components/user-tabel"

const DashboardAdminUser = () => {
  return (
    <div>
      <header>
        <div className='fixed top-0 left-0 right-0 z-50'>
          <Navbar />
        </div>
      </header>

      <main>
        <div className="mt-20 xl:relative xl:max-w-screen-xl xl:mx-auto xl:w-full">
        <UserTable />
        </div>
      </main>

      <footer>
        <div>
            <Footer />
        </div>
      </footer>
    </div>
  )
}

export default DashboardAdminUser