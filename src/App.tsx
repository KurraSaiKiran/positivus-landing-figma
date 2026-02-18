import Navigation from './components/Navigation';
import Hero from './components/Hero';
import LogoStrip from './components/LogoStrip';
import Services from './components/Services';
import WorkingProcess from './components/WorkingProcess';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <Hero />
      <LogoStrip />
      <Services />
      <WorkingProcess />
      <Testimonials />
      <Footer />
    </div>
  );
}

export default App;
