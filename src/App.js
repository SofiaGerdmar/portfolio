import { FeaturedProjects } from 'components/FeaturedProjects';
import { Footer } from 'components/Footer';
import { Header } from 'components/Header';
import { Skills } from 'components/Skills';
import { Tech } from 'components/Tech';
import { ScrollToTop } from 'components/lib/ScrollToTop';
import React from 'react';

export const App = () => {
  return (
    <>
      <Header />
      <ScrollToTop />
      <Tech />
      <FeaturedProjects />
      <Skills />
      <Footer />
    </>
  )
}
