import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import Products from './components/Products';
import VirtualTryOn from './components/VirtualTryOn';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Cart from './components/Cart';
import AdminPanel from './components/AdminPanel';
import { ShoppingCart } from 'lucide-react';

function App() {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <button
        onClick={() => setIsCartOpen(!isCartOpen)}
        className="fixed right-4 top-20 z-50 bg-blue-600 text-white p-3 rounded-full shadow-lg hover:bg-blue-700"
      >
        <ShoppingCart className="h-6 w-6" />
      </button>
      {isCartOpen && <Cart />}
      
      <main>
        <Hero />
        <Services />
        <Products />
        <VirtualTryOn />
        <About />
        <Contact />
        {isAdmin && <AdminPanel />}
      </main>
      
      <Footer />
    </div>
  );
}

export default App;