import Footer from "@/components/footer"
import Navbar from "@/components/navbar"
import WelcomeAdmin from "@/components/welcome-admin"

const DashboardAdminCC = () => {
  return (
    <div>
      <header>
        <div className='fixed top-0 left-0 right-0 z-50'>
          <Navbar />
        </div>
      </header>

      <main>
        <div className="mt-14 xl:relative xl:max-w-screen-xl xl:mx-auto xl:w-full">
        <WelcomeAdmin />
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

export default DashboardAdminCC