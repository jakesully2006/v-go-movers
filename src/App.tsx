/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Stats from './components/Stats';
import About from './components/About';
import Services from './components/Services';
import Industries from './components/Industries';
import Workflow from './components/Workflow';
import Features from './components/Features';
import Quote from './components/Quote';
import Contact from './components/Contact';
import Footer from './components/Footer';
import FloatingActions from './components/FloatingActions';

export default function App() {
  return (
    <div className="min-h-screen font-sans bg-white selection:bg-orange-600 selection:text-white scroll-smooth">
      <Navbar />
      <main>
        <Hero />
        <Stats />
        <About />
        <Services />
        <Industries />
        <Workflow />
        <Features />
        <Quote />
        <Contact />
      </main>
      <Footer />
      <FloatingActions />
    </div>
  );
}


