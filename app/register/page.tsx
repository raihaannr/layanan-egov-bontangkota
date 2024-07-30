import Footer from "@/components/footer"
import FormRegister from "@/components/form-register"
import Navbar from "@/components/navbar"

const Register = () => {
  return (
    <div>
      <header>
        <div className='fixed top-0 left-0 right-0 z-50'>
          <Navbar />
        </div>
      </header>

      <main>
        <FormRegister />
      </main>

      <footer>
        <div>
            <Footer />
        </div>
      </footer>
    </div>
  )
}

export default Register