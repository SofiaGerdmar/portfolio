/* eslint-disable max-len */
import React from 'react';
import styled from 'styled-components/macro';
// import { Swiper, SwiperSlide } from 'swiper/react';
// import { Pagination } from 'swiper/modules';
// import 'swiper/css';
// import 'pagination.css';

const FeaturedSection = styled.section`
width: 100vw;
max-width: 1024px;
height: auto;
margin-bottom: 50px;
display: flex;
flex-direction: column;
align-items: center;
`
const FeaturedContainer = styled.div`
display: flex;
flex-direction: column;
`
const FeaturedBox = styled.div`
margin-bottom: 20px;

@media (min-width: 768px) {
  display: flex;
}
`
const FeaturedText = styled.div`
display: flex;
flex-direction: column;
justify-content: center;

@media (min-width: 768px) {
  height: 280px;
}
`
const FeaturedH1 = styled.h1`
font-family: 'Satoshi-Variable', sans-serif;
font-size: 4.3rem;
font-weight: 700;
margin-bottom: 40px;
margin-top: 30px;
color: #0077b6;
text-align: center;
`
const FeaturedH2 = styled.h2`
font-family: 'Satoshi-Variable', sans-serif;
font-weight: 900;
font-size: 2rem;
margin: 0 20px;
`
const FeaturedP = styled.p`
font-family: 'EB Garamond', serif;
max-width: 300px;
font-size: 1.2rem;
line-height: 1.9rem;
margin: 10px 20px;

@media (min-width: 768px) {
  max-width: 500px;
  font-size: 1.3rem;
}
`
const FeaturedImg = styled.img`
object-fit: cover;
width: 280px;
margin: 0 20px 20px 20px;
border-radius: 10px;
`
const FeaturedLinks = styled.div`
@media (min-width: 768px) {
  display: flex;
  align-items: center;
}
`
const FeaturedDemo = styled.a`
display: inline-block;
background-color: #F5F5F5;
color: #333333;
border-radius: 40px;
margin: 10px 20px;
width: 164px;
transition: background-color 0.3s ease;

&:hover {
background-color: rgba(0,119,182,0.3);
color: #000c55;
}
`
const FeaturedGit = styled.a`
display: inline-block;
background: #F5F5F5;
color: #333333;
border-radius: 40px;
margin: 0 20px;
width: 200px;
transition: background-color 0.3s ease;

&:hover {
  background-color: rgba(0,119,182,0.5);
}
`
export const FeaturedProjects = () => {
  return (
    <FeaturedSection>
      <FeaturedH1>Featured projects</FeaturedH1>
      <FeaturedContainer>
        <FeaturedBox>
          <FeaturedImg src="/images/finalproject.png" alt="screenshot final project" />
          <FeaturedText>
            <FeaturedH2>Final Project</FeaturedH2>
            <FeaturedP>A React Router project featuring the UNESCO World Heritage Sites in Italy. A data set from Kaggle was used and consequently modified in MongoDB Atlas.</FeaturedP>
            <FeaturedLinks>
              <FeaturedDemo href="https://discoveritaly.netlify.app/" title="demo link" target="_blank">
                <img src="/images/demo.svg" alt="demo link" />
              </FeaturedDemo>
              <FeaturedGit href="https://github.com/SofiaGerdmar/project-final-frontend" title="github link" target="_blank">
                <img src="/images/github.svg" alt="github link" />
              </FeaturedGit>
            </FeaturedLinks>
          </FeaturedText>
        </FeaturedBox>
        <FeaturedBox>
          <FeaturedImg src="/images/triviaquiz.png" alt="screenshot quiz project" />
          <FeaturedText>
            <FeaturedH2>Trivia Quiz</FeaturedH2>
            <FeaturedP>In a group project featuring both mob-programming and individual work, the task was to build a quiz using Redux and global state.</FeaturedP>
            <FeaturedLinks>
              <FeaturedDemo href="https://the-fact-frenzy-quiz.netlify.app/" title="demo link" target="_blank">
                <img src="/images/demo.svg" alt="demo link" />
              </FeaturedDemo>
              <FeaturedGit href="https://github.com/Nahnahke/quiz-project" title="github link" target="_blank">
                <img src="/images/github.svg" alt="github link" />
              </FeaturedGit>
            </FeaturedLinks>
          </FeaturedText>
        </FeaturedBox>
        <FeaturedBox>
          <FeaturedImg src="/images/survey.png" alt="screenshot survey project" />
          <FeaturedText>
            <FeaturedH2>Survey</FeaturedH2>
            <FeaturedP>The purpose of this project was to build a survey using useState hook, connecting HTML form inputs to state and learning how to use form fields in React.</FeaturedP>
            <FeaturedLinks>
              <FeaturedDemo href="https://my-performance-review.netlify.app/" title="demo link" target="_blank">
                <img src="/images/demo.svg" alt="demo link" />
              </FeaturedDemo>
              <FeaturedGit href="https://github.com/SofiaGerdmar/project-survey" title="github link" target="_blank">
                <img src="/images/github.svg" alt="github link" />
              </FeaturedGit>
            </FeaturedLinks>
          </FeaturedText>
        </FeaturedBox>
        <FeaturedBox>
          <FeaturedImg src="/images/todo.png" alt="screenshot to do project" />
          <FeaturedText>
            <FeaturedH2>To Do App</FeaturedH2>
            <FeaturedP>A to-do app made to look like a good, old-fashioned grocery list. The app is built with Redux and implements immutability in the form of Immer.</FeaturedP>
            <FeaturedLinks>
              <FeaturedDemo href="https://grocerylist2023.netlify.app/" title="demo link" target="_blank">
                <img src="/images/demo.svg" alt="demo link" />
              </FeaturedDemo>
              <FeaturedGit href="https://github.com/SofiaGerdmar/project-todos" title="github link" target="_blank">
                <img src="/images/github.svg" alt="github link" />
              </FeaturedGit>
            </FeaturedLinks>
          </FeaturedText>
        </FeaturedBox>
        <FeaturedBox>
          <FeaturedImg src="/images/moviereleases.png" alt="screenshot movie releases project" />
          <FeaturedText>
            <FeaturedH2>Movie Releases</FeaturedH2>
            <FeaturedP>Introducing React Router, this pair-programming assignment was to build a multi-page movie application using API:s, useState and useEffect.</FeaturedP>
            <FeaturedLinks>
              <FeaturedDemo href="https://vsmovies.netlify.app/" title="demo link" target="_blank">
                <img src="/images/demo.svg" alt="demo link" />
              </FeaturedDemo>
              <FeaturedGit href="https://github.com/SofiaGerdmar/project-movies" title="github link" target="_blank">
                <img src="/images/github.svg" alt="github link" />
              </FeaturedGit>
            </FeaturedLinks>
          </FeaturedText>
        </FeaturedBox>
        <FeaturedBox>
          <FeaturedImg src="/images/weatherapp.png" alt="screenshot weather app project" />
          <FeaturedText>
            <FeaturedH2>Weather App</FeaturedH2>
            <FeaturedP>Using pair-programming this weather app was built using API:s and JSON. Features include a 5-day forecast and different gradients depending on the current temperature.</FeaturedP>
            <FeaturedLinks>
              <FeaturedDemo href="https://colourful-weather.netlify.app/" title="demo link" target="_blank">
                <img src="/images/demo.svg" alt="demo link" />
              </FeaturedDemo>
              <FeaturedGit href="https://github.com/camcron/project-weather-app" title="github link" target="_blank">
                <img src="/images/github.svg" alt="github link" />
              </FeaturedGit>
            </FeaturedLinks>
          </FeaturedText>
        </FeaturedBox>
        <FeaturedBox>
          <FeaturedImg src="/images/guesswho.png" alt="screenshot guess who project" />
          <FeaturedText>
            <FeaturedH2>Digital Guess Who</FeaturedH2>
            <FeaturedP>The classic board game Guess Who was reinvented with the use of objects, arrays and functions. It was also connected to the DOM via event listeners and innerHTML.</FeaturedP>
            <FeaturedLinks>
              <FeaturedDemo href="https://guess-who-green.netlify.app/" title="demo link" target="_blank">
                <img src="/images/demo.svg" alt="demo link" />
              </FeaturedDemo>
              <FeaturedGit href="https://github.com/SofiaGerdmar/project-guess-who" title="github link" target="_blank">
                <img src="/images/github.svg" alt="github link" />
              </FeaturedGit>
            </FeaturedLinks>
          </FeaturedText>
        </FeaturedBox>
        <FeaturedBox>
          <FeaturedImg src="/images/chatbot.png" alt="screenshot chatbot project" />
          <FeaturedText>
            <FeaturedH2>Chatbot</FeaturedH2>
            <FeaturedP>Efter an introduction to JavaScript this chatbot was built using variables, conditionals, methods and functions. The purpose of the chatbot was up to the developer to decide.</FeaturedP>
            <FeaturedLinks>
              <FeaturedDemo href="https://kiss-the-cook.netlify.app/" title="demo link" target="_blank">
                <img src="/images/demo.svg" alt="demo link" />
              </FeaturedDemo>
              <FeaturedGit href="https://github.com/SofiaGerdmar/project-chatbot" title="github link" target="_blank">
                <img src="/images/github.svg" alt="github link" />
              </FeaturedGit>
            </FeaturedLinks>
          </FeaturedText>
        </FeaturedBox>
        <FeaturedBox>
          <FeaturedImg src="/images/newssite.png" alt="screenshot news site project" />
          <FeaturedText>
            <FeaturedH2>First Project</FeaturedH2>
            <FeaturedP>A pre-bootcamp project making a newspaper/magazine site using HTML, CSS Flexbox and Grid. The page also needed to be responsive in mobile, tablet and desktop.</FeaturedP>
            <FeaturedLinks>
              <FeaturedDemo href="https://visitoland.netlify.app/" title="demo link" target="_blank">
                <img src="/images/demo.svg" alt="demo link" />
              </FeaturedDemo>
              <FeaturedGit href="https://github.com/SofiaGerdmar/project-news-site" title="github link" target="_blank">
                <img src="/images/github.svg" alt="github link" />
              </FeaturedGit>
            </FeaturedLinks>
          </FeaturedText>
        </FeaturedBox>
      </FeaturedContainer>
    </FeaturedSection>
  )
}