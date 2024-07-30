import Navbar from '@/components/navbar';
import { CardLayanan } from '@/components/card-layanan';
import Footer from '@/components/footer';
import Jumbotron from '@/components/jumbotron';
import CardLayananCC from '@/components/card-layanan-cc';
import JumbotronV2 from '@/components/jumbotron/command-center/jumbotronv2';

function CommandCenter() {
  return (
    <div>
      <header>
        <div className='fixed top-0 left-0 right-0 z-50'>
          <Navbar />
        </div>
        <JumbotronV2 />
      </header>

      <main>
        <div className="xl:relative xl:max-w-screen-xl xl:mx-auto xl:w-full">
          <div className="xl:relative xl:inset-0 xl:-top-20">
            <CardLayananCC />
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

export default CommandCenter;
