/* eslint-disable max-len */
import React from 'react';
import styled from 'styled-components/macro';

const TechShadow = styled.div`
background: rgba(199,225,239,1);
display: block;
width: 100vw;
height: 20vh;
overflow: hidden;
position: absolute;
clip-path: polygon(100% 0, 100% 73%, 0 100%, 0 27%);
background-size: cover;
background-position: 75%;
margin-top: 0;
max-width: 1024px;
z-index: -1;
`
const TechSection = styled.section`
width: 100vw;
height: auto;
max-width: 1024px;
margin-top: 100px;
`
const TechMain = styled.div`
background: rgba(199,225,239,1);
display: flex;
flex-direction: column;
align-items: center;
color: #000c55;
`
const TechH1 = styled.h1`
font-family: 'Satoshi-Variable', sans-serif;
font-size: 5rem;
font-weight: 700;
margin-bottom: 40px;
margin-top: 30px;
`
const TechP = styled.p`
font-family: 'EB Garamond';
font-size: 1.3rem;
line-height: 2rem;
margin: 0 20px 100px 20px;
text-align: center;
`
const TechSpan = styled.span`
background-color: #000c55;
color: rgba(199,225,239,1);
padding: 0 5px 5px 5px;
border-radius: 5px;
`
const TechShadow2 = styled.div`
background: rgba(199,225,239,1);
display: block;
width: 100vw;
height: 20vh;
overflow: hidden;
position: absolute;
clip-path: polygon(100% 0, 100% 73%, 0 100%, 0 27%);
background-size: cover;
background-position: 75%;
margin-top: -120px;
max-width: 1024px;
z-index: -1;
`
export const Tech = () => {
  return (
    <>
      <TechShadow />
      <TechSection>
        <TechMain>
          <TechH1>Tech</TechH1>
          <TechP>
        HTML, CSS, Flex, Grid, <TechSpan> JavaScript</TechSpan>, ES6, JSX, <TechSpan>React</TechSpan>, Redux, web accessibility, API:s, pair-programming, React Hooks, GitHub, <TechSpan>mob-programming</TechSpan>.
          </TechP>
        </TechMain>
      </TechSection>
      <TechShadow2 />
    </>
  )
}