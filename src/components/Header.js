/* eslint-disable react/jsx-closing-tag-location */
import React from 'react';
import styled from 'styled-components/macro';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import Lottie from 'react-lottie-player';
import lottieJson from '../lotties/wave.json';

library.add(fab);

const HeaderSection = styled.section`
width: 100vw;
height: 100vh;
`
const HeroSection = styled.div`
height: 58vh;
`
const HeroWrapper = styled.div`
display: none;

@media (min-width: 768px) {
    background-image: linear-gradient( 179deg,  rgba(255,252,243,1) 13.6%, rgba(254,244,232,1) 88.1% );
    display: block;
    width: 100%;
    height: 50vh;
    overflow: hidden;
    position: relative;
    clip-path: polygon(0 0, 100% 0, 100% 55%, 0% 80%);
    background-size: cover;
    background-position: 75%;
    margin-top: 0;
    z-index: -1;
}
`
const HeroWrapperShadow1 = styled.div`
display: none;

@media (min-width: 768px) {
    background-image: linear-gradient( 179deg,  rgba(255,252,243,1) 13.6%, rgba(254,244,232,1) 88.1% );
    display: block;
    width: 100%;
    height: 60vh;
    overflow: hidden;
    position: absolute;
    top: 0px;
    clip-path: polygon(0 0, 100% 0, 100% 55%, 0% 80%);
    background-size: cover;
    background-position: 75%;
    margin-top: 0;
    z-index: -1;
    opacity: 50%;
}
`
const HeroWrapperShadow2 = styled.div`
display: none;

@media (min-width: 768px) {
    background-image: linear-gradient( 179deg,  rgba(255,252,243,1) 13.6%, rgba(254,244,232,1) 88.1% );
    display: block;
    width: 100%;
    height: 70vh;
    overflow: hidden;
    position: absolute;
    top: 0px;
    clip-path: polygon(0 0, 100% 0, 100% 55%, 0% 80%);
    background-size: cover;
    background-position: 75%;
    margin-top: 0;
    z-index: -1;
    opacity: 30%;
}
`
const HeroImage = styled.img`
display: none;

@media (min-width: 768px) {
    max-width: 300px;
    display: flex;
    position: absolute;
    top: 0px;
    left: 10vw;
    z-index: 1;
}
`
const HeroText = styled.div`
display: none;

@media (min-width: 768px) {
    max-width: 250px;
    display: flex;
    flex-direction: column;
    position: absolute;
    top: 15vh;
    right: 10vw;
    z-index: 1;
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
    flex-direction: column;
    background: #fff;
    width: 100vw;
    height: 50vh;
    align-items: center;
}
`
const ProfilePhoto = styled.img`
width: 200px;
height: 200px;
margin: 40px 0 20px 0;
`
const IntroCard = styled.div`
display: flex;
flex-direction: column;
font-family: Satoshi-Variable, sans-serif;
`
const IntroCardHeaders = styled.div`
display: flex;
flex-direction: column;
margin-bottom: 20px;
`
const IntroH2 = styled.h2`
color: #0077b6;
font-weight: 700;
font-size: 1.7rem;
line-height: 2.3rem;
`
const IntroH1 = styled.h1`
color: #1B2021;
font-weight: 900;
font-size: 1.8rem;
line-height: 2.3rem;
`
const IntroH3 = styled.h3`
color: #565656;
font-weight: 500;
font-size: 1.4rem;
line-height: 2rem;
`
const IntroText = styled.p`
font-family: 'EB Garamond', serif;
font-weight: 400;
font-size: 1.3rem;
line-height: 1.7rem;
margin-bottom: 20px;
display: flex;
align-items: center;
`
const SocialMedia = styled.div`
display: flex;
justify-content: center;
gap: 2rem;
text-align: center;
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
const LottieContainer = styled.span`
margin-left: 0.1rem;
position: relative;
`
export const Header = () => {
  return (
    <HeaderSection>
      <HeroSection>
        <HeroWrapper />
        <HeroText>
          <HeroH1>!false</HeroH1>
          <HeroH2>(It&apos;s funny because it&apos;s true.)</HeroH2>
        </HeroText>
        <HeroImage src="/images/logo.png" alt="Logotype" />
        <HeroWrapperShadow1 />
        <HeroWrapperShadow2 />
      </HeroSection>
      <IntroSection>
        <IntroCard>
          <ProfilePhoto src="./images/portrait.png" alt="Portrait" />
          <IntroCardHeaders>
            <IntroH2>Sofia Gerdmar</IntroH2>
            <IntroH1>Frontend developer</IntroH1>
            <IntroH3>+ creative writer</IntroH3>
          </IntroCardHeaders>
        </IntroCard>
        <IntroText>
        Greetings fellow human! Thank you for stopping by!
          <LottieContainer>
            <Lottie
              loop
              animationData={lottieJson}
              play
              style={{ width: 34, height: 34 }} />
          </LottieContainer>
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
      </IntroSection>
    </HeaderSection>
  )
}