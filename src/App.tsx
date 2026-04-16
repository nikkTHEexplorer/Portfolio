import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import SelectedWork from './components/SelectedWork';
import Footer from './components/Footer';
import InfiniteGridBackground from './components/InfiniteGridBackground';

export default function App() {
  return (
    <div className="min-h-screen bg-white font-sans text-slate-900 selection:bg-emerald-500 selection:text-white">
      <div className="hero-grid-shell text-slate-900 overflow-hidden relative rounded-b-[3rem]">
        <InfiniteGridBackground />
        <div className="relative z-10">
          <Navbar />
          <Hero />
        </div>
      </div>
      <Services />
      <SelectedWork />
      <About />
      <Footer />
    </div>
  );
}
