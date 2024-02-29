import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAnglesUp } from '@fortawesome/free-solid-svg-icons';
import styled, { keyframes } from 'styled-components';

const MoveBtnAnimation = keyframes`
  0% {
    transform: translateY(0px);
  }
  25% {
    transform: translateY(20px);
  }
  50% {
    transform: translateY(0px);
  }
  75% {
    transform: translateY(-20px);
  }
  100% {
    transform: translateY(0px);
  }
`;

const ScrollToTopContainer = styled.div`
  position: relative;
  max-width: 1024px;
`;

const IconPosition = styled.div`
  position: fixed;
  bottom: 50px;
  right: 45px;
  z-index: 20;
  max-width: 1024px;

  @media (max-width: 768px) {
    bottom: 5%;
    right: 50%;
    transform: translate(-50% -50%);

  }
`;

const IconStyle = styled(FontAwesomeIcon).attrs({ icon: faAnglesUp })`
  background-color: transparent;
  height: 40px;
  width: 40px;
  color: #000c55;
  cursor: pointer;
  animation: ${MoveBtnAnimation} 3s ease-in-out infinite;
  transition: all 0.5s ease-in-out;

  &:hover {
    animation: none;
    background: transparent;
    color: #0077b6;
  }
`;

export const ScrollToTop = () => {
  const [showTopBtn, setShowTopBtn] = useState(false);

  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 400) {
        setShowTopBtn(true);
      } else {
        setShowTopBtn(false);
      }
    });
  }, []);

  const goToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <ScrollToTopContainer>
      {showTopBtn && (
        <IconPosition>
          <IconStyle onClick={goToTop} />
        </IconPosition>
      )}
    </ScrollToTopContainer>
  );
};
