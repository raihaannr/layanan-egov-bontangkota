import Footer from "@/components/footer"
import FormLogin from "@/components/form-login"
import Navbar from "@/components/navbar"

const Login = () => {
  return (
    <div>
      <header>
        <div className='fixed top-0 left-0 right-0 z-50'>
          <Navbar />
        </div>
      </header>

      <main>
        <FormLogin />
      </main>

      <footer>
        <div>
            <Footer />
        </div>
      </footer>
    </div>
  )
}

export default Login