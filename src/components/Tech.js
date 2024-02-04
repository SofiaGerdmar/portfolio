/* eslint-disable max-len */
import React from 'react';
import styled from 'styled-components/macro';

const TechSection = styled.section`
width: 100vw;
height: auto;
max-width: 1024px;
display: flex;
flex-direction: column;
background-image: linear-gradient( 179deg,  rgba(0,119,182,0.2) 13.6%, rgba(199,225,239,0.2) 88.1% );
margin-top: 80px;
`
const TechMain = styled.div`

`
const TechH1 = styled.h1`
font-family: 'Satoshi-Variable', sans-serif;
font-size: 4rem;
font-weight: 700;
text-align: center;
margin: 60px 0 20px 0;
`
const TechP = styled.p`
font-family: 'EB Garamond', serif;
font-weight: 400;
font-size: 1.2rem;
line-height: 1.7rem;
margin: 0 20px 0 20px;
`

export const Tech = () => {
  return (
    <TechSection>
      <TechMain>
        <TechH1>
            Tech
        </TechH1>
        <TechP>
        HTML, CSS, Flex, Grid, JavaScript, ES6, JSX, React, Redux, web accessibility, API:s, pair-programming, React Hooks, GitHub.
        </TechP>
      </TechMain>
    </TechSection>
  )
}