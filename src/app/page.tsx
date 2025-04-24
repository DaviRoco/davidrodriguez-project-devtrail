'use client';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { useState } from 'react';

import styles from './page.module.css';
import About from './ui/components/about/About';
import Contact from './ui/components/contact/Contact';
import Footer from './ui/components/footer/Footer';
import Header from './ui/components/header/Header';
import Home from './ui/components/home/Home';
import Portfolio from './ui/components/portfolio/Portfolio';
import Qualification from './ui/components/qualification/Qualification';
import ScrollUp from './ui/components/scrollup/ScrollUp';
import Skills from './ui/components/skills/Skills';
import Solutions from './ui/components/solutions/Solutions';

export default function App() {
  const [queryClient] = useState(() => new QueryClient());

  return (
    <QueryClientProvider client={queryClient}>
      <div className={styles.page}>
        <Header />
        <main className="main">
          <Home />
          <About />
          <Skills />
          <Solutions />
          <Portfolio />
          <Qualification />
          <Contact />
        </main>
        <Footer />
        <ScrollUp />
      </div>
    </QueryClientProvider>
  );
}
