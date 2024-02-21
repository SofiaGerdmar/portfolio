/* eslint-disable react/jsx-closing-tag-location */
import React from 'react';
import styled from 'styled-components/macro';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';

library.add(fab);

const HeaderSection = styled.section`
width: 100vw;
height: auto;
max-width: 1024px;
margin-bottom: 100px;
`
const HeroSection = styled.div`
height: 20vh;

@media (min-width: 768px) {
  height: 50vh;
  max-width: 1024px;
}
`
const HeroWrapperShadow = styled.div`
background-image: linear-gradient( 179deg,  rgba(255,252,243,1) 13.6%, rgba(254,244,232,1) 88.1% );
display: block;
width: 100vw;
height: 20vh;
overflow: hidden;
position: absolute;
clip-path: polygon(0 0, 100% 0, 100% 55%, 0% 80%);
background-size: cover;
background-position: 75%;
margin-top: 0;
z-index: -1;
max-width: 1024px;

@media (min-width: 768px) {
  height: 30vh;
}
`
const HeroWrapper = styled.div`
display: flex;
flex-direction: row-reverse;
justify-content: space-around;
width: 100%;
`
const HeroWrapperShadow1 = styled.div`
background-image: linear-gradient( 179deg,  rgba(255,252,243,1) 13.6%, rgba(254,244,232,1) 88.1% );
display: block;
width: 100vw;
height: 30vh;
overflow: hidden;
position: absolute;
top: 0px;
clip-path: polygon(0 0, 100% 0, 100% 55%, 0% 80%);
background-size: cover;
background-position: 75%;
margin-top: 0;
z-index: -1;
opacity: 50%;
max-width: 1024px;

@media (min-width: 768px) {
  height: 40vh;
}
`
const HeroWrapperShadow2 = styled.div`
background-image: linear-gradient( 179deg,  rgba(255,252,243,1) 13.6%, rgba(254,244,232,1) 88.1% );
display: block;
width: 100vw;
height: 40vh;
overflow: hidden;
position: absolute;
top: 0px;
clip-path: polygon(0 0, 100% 0, 100% 55%, 0% 80%);
background-size: cover;
background-position: 75%;
margin-top: 0;
z-index: -1;
opacity: 30%;
max-width: 1024px;

@media (min-width: 768px) {
  height: 50vh;
}
`
const HeroImage = styled.img`
display: none;

@media (min-width: 768px) {
  max-width: 300px;
  display: flex;
  z-index: 1;
}
`
const HeroText = styled.div`
display: none;

@media (min-width: 768px) {
  display: flex;
  flex-direction: column;
  /* position: relative; 
  top: 15vh;
  left: 10vw; */
  z-index: 1;
  justify-content: center;
}
`
const HeroH1 = styled.h1`
display: flex;
font-family: 'Bellefair';
font-weight: 500;
color: #000c55;
font-size: 3.2rem;
margin-bottom: 20px;
`
const HeroH2 = styled.h2`
display: flex;
font-family: 'Bellefair';
font-weight: 500;
color: #000c55;
font-size: 1.2rem;
`
const IntroSection = styled.div`
@media (min-width: 768px) {
  display: flex;
  align-items: flex-start;
  width: 100%;
  max-width: 1024px;
  justify-content: space-around;
}

@media (min-width: 1024px) {
  display: flex;
  background: #fff;
  width: 100vw;
  height: auto;
  align-items: center;
  margin-top: 20px;
  max-width: 1024px;
}
`
const ProfilePhoto = styled.img`
width: 200px;
height: 200px;
margin: -90px 0 20px 0;

@media (min-width: 768px) {
  margin: -40px 0 20px 0;
}
`
const IntroCard = styled.div`
display: flex;
flex-direction: column;
font-family: 'Satoshi-Variable', sans-serif;
align-items: center;

@media (min-width: 768px) {
  margin: 20px 0 0 20px;
}
`
const IntroCardHeaders = styled.div`
display: flex;
flex-direction: column;
margin-bottom: 20px;
`
const IntroH1 = styled.h1`
color: #0077b6;
font-weight: 700;
font-size: 1.7rem;
line-height: 2.3rem;
`
const IntroH2 = styled.h2`
color: #000c55;
font-weight: 900;
font-size: 1.7rem;
line-height: 2.3rem;
`
const IntroH3 = styled.h3`
color: #565656;
font-weight: 500;
font-size: 1.4rem;
line-height: 2rem;
`
const IntroTextContainer = styled.div`
display: flex;
flex-direction: column;
align-items: center;

@media (min-width: 1024px) {
  align-items: unset;
}
`
const IntroText = styled.p`
font-family: 'EB Garamond', serif;
font-weight: 400;
font-size: 1.2rem;
line-height: 1.9rem;
margin: 0 10px 20px 20px;
width: 300px;

@media (min-width: 768px) {
  font-size: 1.3rem;
  width: 50vw;
}
@media (min-width: 1024px) {
  max-width: 600px;
}
`
const SocialMedia = styled.div`
display: flex;
justify-content: center;
gap: 2rem;
text-align: center;

@media (min-width: 768px) {
  margin-top: 10px;
}
`
const IconLink = styled.a`
font-size: 2rem;
color: #1b2021;

&:visited {
  color: #1b2021;
}
&:hover {
  color: #d0d0d0;
}
`
export const Header = () => {
  return (
    <HeaderSection>
      <HeroSection>
        <HeroWrapperShadow />
        <HeroWrapper>
          <HeroText>
            <HeroH1>!false</HeroH1>
            <HeroH2>(It&apos;s funny because it&apos;s true.)</HeroH2>
          </HeroText>
          <HeroImage src="/images/logo.png" alt="Logotype" />
        </HeroWrapper>
        <HeroWrapperShadow1 />
        <HeroWrapperShadow2 />
      </HeroSection>
      <IntroSection>
        <IntroCard>
          <ProfilePhoto src="./images/portrait.png" alt="Portrait" />
          <IntroCardHeaders>
            <IntroH1>Sofia Gerdmar</IntroH1>
            <IntroH2>Frontend developer</IntroH2>
            <IntroH3>+ creative writer</IntroH3>
          </IntroCardHeaders>
        </IntroCard>
        <IntroTextContainer>
          <IntroText>
        Welcome to my portfolio! Thank you for stopping by!
          </IntroText>
          <IntroText>
        I have a background in creative writing and administration, and bring both creativity
        and attention to detail to any project I work on. I come alive when working with
        CSS/styled components and would love to branch out to UX/UI design in the future.
          </IntroText>
          <IntroText>
        Additionally, I am a people person and I love making everyone around me feel
        comfortable and valued.
        This makes me a valuable asset in everything from group projects to customer relations.
          </IntroText>
          <SocialMedia>
            <IconLink
              title="Link to my LinkedIn"
              href="https://www.linkedin.com/in/sofia-gerdmar/"
              target="_blank"
              rel="noreferrer">
              <FontAwesomeIcon icon={['fab', 'linkedin-in']} />
            </IconLink>
            <IconLink
              title="Link to my GitHub"
              href="https://github.com/SofiaGerdmar"
              target="_blank"
              rel="noreferrer">
              <FontAwesomeIcon icon={['fab', 'github']} />
            </IconLink>
            <IconLink
              title="Link to my StackOverflow"
              href="https://stackoverflowteams.com/c/technigo/users/465/?tab=profile"
              target="_blank"
              rel="noreferrer">
              <FontAwesomeIcon icon={['fab', 'stack-overflow']} />
            </IconLink>
          </SocialMedia>
        </IntroTextContainer>
      </IntroSection>
    </HeaderSection>
  )
}