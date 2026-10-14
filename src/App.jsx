import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import Gallery from './components/Gallery/Gallery';
import Process from './components/Process/Process';
import VideoSection from './components/VideoSection/VideoSection';
import About from './components/About/About';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import { useLanguage } from './i18n/LanguageContext';

export default function App() {
  const { s } = useLanguage();
  return (
    <>
      <a className="skip-link" href="#work">
        {s.skip}
      </a>
      <Header />
      <main>
        <Hero />
        <Gallery />
        <Process />
        <VideoSection />
        <About />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
