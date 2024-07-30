import Navbar from '@/components/navbar';
import Footer from '@/components/footer';
import FAQ from '@/components/faq-content';
import JumbotronV4 from '@/components/jumbotron/command-center/jumbotronv4';

function Faq() {
  return (
    <div>
      <header>
        <div className='fixed top-0 left-0 right-0 z-50'>
          <Navbar />
        </div>
        <JumbotronV4 />
      </header>

      <main>
        <div className="xl:relative xl:max-w-screen-xl xl:mx-auto xl:w-full">
          <div className="xl:relative xl:inset-0 xl:-top-20">
            <FAQ />
          </div>
        </div>
      </main>

      <footer>
        <div className='mt-5 xl:mt-5'>
          <Footer />
        </div>
      </footer>
    </div>
  )
}

export default Faq;
