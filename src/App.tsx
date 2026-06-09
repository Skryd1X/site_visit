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

export default function App() {
  return (
    <div className="min-h-screen bg-white">
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
