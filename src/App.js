import { FeaturedProjects } from 'components/FeaturedProjects';
import { Footer } from 'components/Footer';
import { Header } from 'components/Header';
import { Skills } from 'components/Skills';
import { Tech } from 'components/Tech';
import React from 'react';

export const App = () => {
  return (
    <>
      <Header />
      <Tech />
      <FeaturedProjects />
      <Skills />
      <Footer />
    </>
  )
}
