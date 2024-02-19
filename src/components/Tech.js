/* eslint-disable max-len */
import React from 'react';
import styled from 'styled-components/macro';

const TechShadow = styled.div`
background-image: linear-gradient( 179deg,  rgba(0,119,182,1) 13.6%, rgba(199,225,239,1) 88.1% );
display: block;
width: 100vw;
height: 20vh;
overflow: hidden;
position: absolute;
clip-path: polygon(0 45%, 100% 20%, 100% 55%, 0 80%);
background-size: cover;
background-position: 75%;
margin-top: 0;
max-width: 1024px;
z-index: 1;
opacity: 30%;
`
const TechSection = styled.section`
width: 100vw;
height: 90vh;
max-width: 1024px;
max-height: 600px;
display: flex;
align-items: center;
justify-content: center;
`
const TechMain = styled.div`
background: white;
display: flex;
flex-direction: column;
align-items: center;

`
const TechH1 = styled.h1`
font-family: 'Satoshi-Variable', sans-serif;
font-size: 5rem;
font-weight: 700;
margin-bottom: 40px;
margin-top: 50px;
color: #000c55;
`
const TechP = styled.p`
font-family: 'EB Garamond';
font-size: 1.3rem;
line-height: 2rem;
margin: 0 20px 0px 20px;
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
const TechShadow2 = styled.div`
background-image: linear-gradient( 179deg,  rgba(0,119,182,1) 13.6%, rgba(199,225,239,1) 88.1% );
display: block;
width: 100vw;
height: 20vh;
overflow: hidden;
position: absolute;
clip-path: polygon(0 45%, 100% 20%, 100% 55%, 0 80%);
background-size: cover;
background-position: 75%;
margin-top: -80px;
max-width: 1024px;
z-index: -1;
opacity: 30%;
`
export const Tech = () => {
  return (
    <>
      <TechShadow />
      <TechSection>
        <TechMain>
          <TechH1>Tech</TechH1>
          <TechP>
        HTML, CSS, Flex, Grid, <TechSpanLight> JavaScript</TechSpanLight>, ES6, JSX, <TechSpanDark>React</TechSpanDark>, Redux, web accessibility, API:s, pair-programming, React Hooks, GitHub, <TechSpanLight>mob-programming</TechSpanLight>.
          </TechP>
        </TechMain>
      </TechSection>
      <TechShadow2 />
    </>
  )
}