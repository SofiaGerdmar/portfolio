/* eslint-disable max-len */
import React from 'react';
import styled from 'styled-components/macro';

const TechSection = styled.section`
width: 100vw;
height: 90vh;
max-width: 1024px;
max-height: 600px;
display: flex;
align-items: center;
justify-content: center;
clip-path: polygon(0 15%, 100% 0%, 100% 75%, 0 90%);
background-image: linear-gradient( 179deg,  rgba(0,119,182,0.3) 13.6%, rgba(199,225,239,0.3) 88.1% );
`
const TechMain = styled.div`
display: flex;
flex-direction: column;
align-items: center;
`
const TechH1 = styled.h1`
font-family: 'Satoshi-Variable', sans-serif;
font-size: 5rem;
font-weight: 700;
margin-bottom: 40px;
color: #000c55;
`
const TechP = styled.p`
font-family: 'EB Garamond';
font-size: 1.3rem;
line-height: 2rem;
margin: 0 20px 60px 20px;
text-align: center;
max-width: 700px;
`
const TechSpanDark = styled.span`
background-color: #000c55;
color: white;
padding: 0 5px 5px 5px;
border-radius: 5px;
`
const TechSpanLight = styled.span`
background-color: #0077b6;
color: white;
padding: 0 5px 5px 5px;
border-radius: 5px;
`

export const Tech = () => {
  return (
    <TechSection>
      <TechMain>
        <TechH1>Tech</TechH1>
        <TechP>
        HTML, CSS, Flex, Grid, <TechSpanLight> JavaScript</TechSpanLight>, ES6, JSX, <TechSpanDark>React</TechSpanDark>, Redux, web accessibility, API:s, pair-programming, React Hooks, GitHub, <TechSpanLight>mob-programming</TechSpanLight>.
        </TechP>
      </TechMain>
    </TechSection>
  )
}