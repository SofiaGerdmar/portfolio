import React from 'react';
import styled from 'styled-components/macro';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';

library.add(fab);

const FooterSection = styled.section`
width: 100vw;
height: auto;
max-width: 1024px;
margin-bottom: 100px;
display: flex;
flex-direction: column;
`
const FooterWrapperTop = styled.div`
height: 20vh;
display: flex;
margin-bottom: 100px;
`
const FooterShadowTop = styled.div`
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
`
const FooterShadowTop2 = styled.div`
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
`
const FooterShadowTop3 = styled.div`
background-image: linear-gradient( 179deg, rgba(255,252,243,1) 13.6%, rgba(254,244,232,1) 88.1% );
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
`
const FooterH1 = styled.h1`
font-family: 'Satoshi-Variable', sans-serif;
font-size: 4.5rem;
font-weight: 700;
margin-bottom: 40px;
color: #0077b6;
text-align: center;
`
const ProfilePhoto = styled.img`
width: 200px;
height: 200px;
margin: 0 0 20px 0;

@media (min-width: 768px) {
  margin: 0 0 20px 0;
}
`
const FooterIntroCard = styled.div`
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
const SocialMedia = styled.div`
display: flex;
justify-content: center;
gap: 2rem;
text-align: center;
margin-bottom: 120px;

@media (min-width: 768px) {
  margin-top: 10px;
  margin-bottom: 160px;
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
const ContactInfo = styled.div`
margin-top: 20px;
margin-bottom: 40px;
display: flex;
flex-direction: column;
align-items: center;
`
const Email = styled.a`
font-family: 'Satoshi-Variable', sans-serif;
color: #0077b6;
font-weight: 700;
font-size: 1.5rem;
margin-bottom: 20px;
text-decoration: 1px solid underline;

&:visited {
  color: #0077b6;
}
&:hover {
  color: #d0d0d0;
}
`
const Phone = styled.p`
font-family: 'Satoshi-Variable', sans-serif;
color: #0077b6;
font-weight: 700;
font-size: 1.5rem;
`
const FooterWrapperBottom = styled.div`
display: flex;
flex-direction: row;
justify-content: space-around;
width: 100%;
transform: rotate(180deg);
margin-top: 100px;
position: relative;
bottom: 0px;
`
const FooterShadowBottom = styled.div`
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
const FooterShadowBottom2 = styled.div`
background-image: linear-gradient( 179deg,  rgba(255,252,243,1) 13.6%, rgba(254,244,232,1) 88.1% );
display: block;
width: 100vw;
height: 30vh;
overflow: hidden;
position: absolute;
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
const FooterShadowBottom3 = styled.div`
background-image: linear-gradient( 179deg,  rgba(255,252,243,1) 13.6%, rgba(254,244,232,1) 88.1% );
display: block;
width: 100vw;
height: 40vh;
overflow: hidden;
position: absolute;
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
export const Footer = () => {
  return (
    <>
      <FooterWrapperTop>
        <FooterShadowTop />
        <FooterShadowTop2 />
        <FooterShadowTop3 />
      </FooterWrapperTop>
      <FooterSection>
        <FooterH1>Let&apos;s get in touch!</FooterH1>
        <FooterIntroCard>
          <ProfilePhoto src="./images/portrait.png" alt="Portrait" />
          <IntroCardHeaders>
            <IntroH1>Sofia Gerdmar</IntroH1>
            <IntroH2>Frontend developer</IntroH2>
            <IntroH3>+ creative writer</IntroH3>
          </IntroCardHeaders>
        </FooterIntroCard>
        <ContactInfo>
          <Email
            title="Email me"
            href="mailto:sofia.gerdmar@gmail.com"
            target="_blank"
            rel="noreferrer">
            Email me
          </Email>
          <Phone>+46 (0)704760059</Phone>
        </ContactInfo>
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
      </FooterSection>
      <FooterWrapperBottom>
        <FooterShadowBottom />
        <FooterShadowBottom2 />
        <FooterShadowBottom3 />
      </FooterWrapperBottom>
    </>
  )
}