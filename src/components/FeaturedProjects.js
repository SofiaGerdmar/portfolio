/* eslint-disable max-len */
import React from 'react';
import styled from 'styled-components/macro';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'pagination.css';

const FeaturedSection = styled.section`
width: 100vw;
max-width: 1024px;
height: auto;
margin-top: 100px;
display: flex;
flex-direction: column;
align-items: center;
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
`
const FeaturedP = styled.p`
font-family: 'EB Garamond', serif;
max-width: 300px;
font-size: 1.2rem;
line-height: 1.9rem;
`
const FeaturedImg = styled.img`
object-fit: cover;
`
export const FeaturedProjects = () => {
  return (
    <FeaturedSection>
      <FeaturedH1>Featured projects</FeaturedH1>
      <Swiper pagination={{ dynamicBullets: true }} modules={[Pagination]} className="swiper">
        <SwiperSlide>
          <FeaturedImg src="/images/finalproject.png" alt="screen shot final project" />
          <FeaturedH2>Final project</FeaturedH2>
          <FeaturedP>A React Router project featuring the UNESCO World Heritage Sites in Italy. A data set from Kaggle was used and consequently modified in MongoDB Atlas.</FeaturedP>
        </SwiperSlide>
        <SwiperSlide>
          <FeaturedImg src="/images/finalproject.png" alt="image of screen shot final project" />
          <FeaturedH2>Final project</FeaturedH2>
          <FeaturedP>A React Router project featuring the UNESCO World Heritage Sites in Italy. A data set from Kaggle was used and consequently modified in MongoDB Atlas.</FeaturedP>
        </SwiperSlide>
      </Swiper>
    </FeaturedSection>
  )
}