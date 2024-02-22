import React from 'react';
import styled from 'styled-components/macro';

const SkillsSection = styled.section`
width: 100vw;
height: 1600px;
max-width: 1024px;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
margin: 50px 0 50px 0;
`
const SkillsWrapper = styled.div`
height: 20vh;
display: flex;
`
const SkillsShadow = styled.div`
display: block;
width: 100vw;
height: 10vh;
overflow: hidden;
position: relative;
clip-path: polygon(0 35%, 100% 0%, 100% 55%, 0 95%);
background-image: linear-gradient( 179deg,  rgba(255,252,243,1) 13.6%, rgba(254,244,232,1) 88.1% );
background-size: cover;
background-position: 75%;
margin-top: 0;
z-index: -1;
max-width: 1024px;

@media (min-width: 768px) {
  height: 20vh;
}
`
const SkillsShadow2 = styled.div`
background-image: linear-gradient( 179deg,  rgba(255,252,243,1) 13.6%, rgba(254,244,232,1) 88.1% );
display: block;
width: 100vw;
height: 20vh;
overflow: hidden;
position: absolute;
clip-path: polygon(0 35%, 100% 0%, 100% 55%, 0 90%);
background-size: cover;
background-position: 75%;
margin-top: 0;
z-index: -1;
opacity: 50%;
max-width: 1024px;

@media (min-width: 768px) {
  height: 30vh;
}
`
const SkillsShadow3 = styled.div`
background-image: linear-gradient( 179deg,  rgba(255,252,243,1) 13.6%, rgba(254,244,232,1) 88.1% );
display: block;
width: 100vw;
height: 30vh;
overflow: hidden;
position: absolute;
clip-path: polygon(0 35%, 100% 0%, 100% 55%, 0 90%);
background-size: cover;
background-position: 75%;
margin-top: 0;
z-index: -1;
opacity: 30%;
max-width: 1024px;

@media (min-width: 768px) {
  height: 40vh;
}
`
const SkillsH1 = styled.h1`
font-family: 'Satoshi-Variable', sans-serif;
font-size: 5rem;
font-weight: 700;
margin-bottom: 40px;
color: #000c55;
`
const SkillsH2 = styled.h2`
font-family: 'Satoshi-Variable', sans-serif;
font-size: 1.5rem;
font-weight: 600;
color: #000c55;
`
const SkillsList = styled.ul`
font-family: 'EB Garamond', serif;
color: #000c55;
font-size: 1.2rem;
line-height: 1.9rem;
text-align: center;
margin: 10px 0 20px 0;
`
const SkillsListItem = styled.li`

`
export const Skills = () => {
  return (
    <>
      <SkillsWrapper>
        <SkillsShadow />
        <SkillsShadow2 />
        <SkillsShadow3 />
      </SkillsWrapper>
      <SkillsSection>
        <SkillsH1>Skills</SkillsH1>
        <SkillsH2>Code</SkillsH2>
        <SkillsList>
          <SkillsListItem>HTML5</SkillsListItem>
          <SkillsListItem>CSS</SkillsListItem>
          <SkillsListItem>JavaScript ES6</SkillsListItem>
          <SkillsListItem>React</SkillsListItem>
          <SkillsListItem>Styled components</SkillsListItem>
          <SkillsListItem>Redux</SkillsListItem>
          <SkillsListItem>MongoDB</SkillsListItem>
          <SkillsListItem>Mongoose</SkillsListItem>
          <SkillsListItem>Node.js</SkillsListItem>
          <SkillsListItem>Express.js</SkillsListItem>
          <SkillsListItem>Web accessibility</SkillsListItem>
        </SkillsList>
        <SkillsH2>Toolbox</SkillsH2>
        <SkillsList>
          <SkillsListItem>Visual Studio Code</SkillsListItem>
          <SkillsListItem>Figma</SkillsListItem>
          <SkillsListItem>Slack</SkillsListItem>
          <SkillsListItem>StackOverflow</SkillsListItem>
          <SkillsListItem>Adobe Photoshop</SkillsListItem>
          <SkillsListItem>Adobe Illustrator</SkillsListItem>
          <SkillsListItem>GitHub</SkillsListItem>
          <SkillsListItem>Inkscape</SkillsListItem>
          <SkillsListItem>Canva</SkillsListItem>
          <SkillsListItem>GIMP</SkillsListItem>
          <SkillsListItem>Postman</SkillsListItem>
          <SkillsListItem>Compass</SkillsListItem>
          <SkillsListItem>Atlas</SkillsListItem>
          <SkillsListItem>Render</SkillsListItem>
          <SkillsListItem>Kaggle</SkillsListItem>
        </SkillsList>
        <SkillsH2>Soft skills</SkillsH2>
        <SkillsList>
          <SkillsListItem>Creative writing</SkillsListItem>
          <SkillsListItem>Agile methodology</SkillsListItem>
          <SkillsListItem>Translation</SkillsListItem>
          <SkillsListItem>Desktop publishing</SkillsListItem>
          <SkillsListItem>Administration</SkillsListItem>
          <SkillsListItem>Team work</SkillsListItem>
          <SkillsListItem>English</SkillsListItem>
          <SkillsListItem>Mob programming</SkillsListItem>
          <SkillsListItem>Pair programming</SkillsListItem>
          <SkillsListItem>Management experience</SkillsListItem>
        </SkillsList>
        <SkillsH2>Upcoming</SkillsH2>
        <SkillsList>
          <SkillsListItem>TypeScript</SkillsListItem>
          <SkillsListItem>Tailwind CSS</SkillsListItem>
          <SkillsListItem>UX/UI design</SkillsListItem>
        </SkillsList>
      </SkillsSection>
    </>
  )
}