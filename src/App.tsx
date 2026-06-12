import { useEffect, useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import PriceList from './components/PriceList';
import WorkProcess from './components/WorkProcess';
import Advantages from './components/Advantages';
import EquipmentCategories from './components/EquipmentCategories';
import Contacts from './components/Contacts';
import Footer from './components/Footer';
import Preloader from './components/Preloader';

export default function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = window.setTimeout(() => setLoading(false), 650);
    return () => window.clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen bg-white">
      {loading && <Preloader />}
      <Header />
      <main>
        <Hero />
        <About />
        <Services />
        <PriceList />
        <WorkProcess />
        <Advantages />
        <EquipmentCategories />
        <Contacts />
      </main>
      <Footer />
    </div>
  );
}
