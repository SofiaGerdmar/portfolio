import React from 'react';
import styled from 'styled-components';

const HeaderSection = styled.section`
display: flex;
flex-direction: column;
align-items: flex-start;
margin: 0 10vw 0 10vw;
`
const IntroWrapper = styled.div`
@media (min-width: 1024px) {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    background: #fff;
    width: 50vw;
    height: 100vh;
    margin: 20px;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
}
`
const HeroWrapper = styled.div`
display: none;

@media (min-width: 1024px) {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    background-image: linear-gradient( 179deg,  rgba(255,252,243,1) 13.6%, rgba(254,244,232,1) 88.1% );
    width: 50vw;
    height: 100vh;
    margin: 20px;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
}
`
const HeroImage = styled.img`
max-width: 350px;
display: flex;
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
`
export const Header = () => {
  return (
    <HeaderSection>
      <HeroWrapper>
        <HeroImage src="/images/logo.png" alt="Logotype" />
      </HeroWrapper>
      <IntroWrapper>
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

      </IntroWrapper>
    </HeaderSection>
  )
}