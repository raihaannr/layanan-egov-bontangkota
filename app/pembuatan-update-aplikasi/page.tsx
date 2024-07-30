import Navbar from '@/components/navbar';
import Footer from '@/components/footer';
import JumbotronV3 from '@/components/jumbotron/command-center/jumbotronv3 copy';
import UnderConstruction from '@/components/under-construction';

function PembuatanUpdateAplikasi() {
  return (
    <div>
      <header>
        <div className='fixed top-0 left-0 right-0 z-50'>
          <Navbar />
        </div>
        <JumbotronV3 />
      </header>

      <main>
        <div className="xl:relative xl:max-w-screen-xl xl:mx-auto xl:w-full">
          <div className="xl:relative xl:inset-0 xl:-top-20">
            <UnderConstruction />
          </div>
        </div>
      </main>

      <footer>
        <div className='xl:mt-5'>
          <Footer />
        </div>
      </footer>
    </div>
  )
}

export default PembuatanUpdateAplikasi;
