import Navbar from '@/components/navbar';
import Footer from '@/components/footer';
import JumbotronV3 from '@/components/jumbotron/command-center/jumbotronv3 copy';
import PemesananCard from '@/components/pemesanan-table';

function status() {
  return (
    <div>
      <header>
        <div className='fixed top-0 left-0 right-0 z-50'>
          <Navbar />
        </div>
      </header>

      <main className='mt-20 max-w-screen-xl mx-auto w-full'>
        <PemesananCard />
      </main>

      <footer>
        <div className='mt-5 xl:mt-5'>
          <Footer />
        </div>
      </footer>
    </div>
  )
}

export default status;
