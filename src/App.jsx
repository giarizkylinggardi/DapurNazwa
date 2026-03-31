import Navbar from './components/Navbar';
import Hero from './sections/Hero';
import Menu from './sections/Menu';
import ContactLocation from './sections/ContactLocation';
import Footer from './components/Footer';
import FloatingWA from './components/FloatingWA';

const App = () => {
  return (
    <div className="min-h-screen bg-warm-50 dark:bg-dark-bg">
      <Navbar />
      <main>
        <Hero />
        <Menu />
        <ContactLocation />
      </main>
      <Footer />
      <FloatingWA />
    </div>
  );
};

export default App;
