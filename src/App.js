import { FeaturedProjects } from 'components/FeaturedProjects';
import { Header } from 'components/Header';
import { Skills } from 'components/Skills';
import { Tech } from 'components/Tech';
import React from 'react';
import styled from 'styled-components/macro';

const AppDiv = styled.div`
/* margin: 0 20px 0 20px; */
`

export const App = () => {
  return (
    <AppDiv>
      <Header />
      <Tech />
      <FeaturedProjects />
      <Skills />
    </AppDiv>
  )
}
