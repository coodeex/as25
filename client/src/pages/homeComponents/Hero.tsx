import { useEffect, useState } from 'react';
import styled, { keyframes } from 'styled-components';
import AS25Logo from '../../assets/images/mustaTausta.png';
import '../../App.css';

const Hero = () => {
  const textleft = 'Tervetuloa mukaan aASien riemujuhlaan!';
  const [text, setText] = useState('');
  const stimutext = " Stimulaatio Stimulaatio Stimulaatio "

  const typeWriter = (text: string, i = 0) => {
    if (i < textleft.length) {
      setText(text.slice(0, i + 1));
      setTimeout(() => {
        typeWriter(text, i + 1);
      }, 100);
    }
  };

  useEffect(() => {
    typeWriter(textleft);
  }, []);

  return (
    <HeroContainer>
      <MobileContainer>
        <MobileLogo src={AS25Logo} alt="Logo" />
      </MobileContainer>
      <Container>
        <TextLeft>{text}</TextLeft>
        <TextCursor />
      </Container>
      <Logo src={AS25Logo} alt="Logo" />
      <Circle>
        <StimuDate>24.11.</StimuDate>
        <StimuText className='text'>
          {stimutext.split('').map((char, i) => 
          <StimuSpan style={{transform: `rotate(${i*10}deg)`}}>{char}</StimuSpan>
          )}
        </StimuText>
      </Circle>
    </HeroContainer>
  );
};

const HeroContainer = styled.div`
  display: inline;
  justify-content: space-evenly;
  width: 100vw;
  height: 80vh;
  @media only screen and (min-width: 1000px) {
    display: flex;
  }
`;

const MobileContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
`;

const MobileLogo = styled.img`
  padding-left: 40px;
  width: 100%;
  margin-left: -50px;
  object-fit: contain;
  max-height: 600px;
  @media only screen and (min-width: 1000px) {
    display: none;
    height: 80vh;
  }
`;

const Logo = styled.img`
  display: none;
  max-width: 100%;
  object-fit: contain;
  @media only screen and (min-width: 1000px) {
    display: inline;
    max-width: 50%;
  }
`;

const Container = styled.div`
  display: flex;
  padding: 0 0 0 3vw;
  max-width: 100%;
  @media only screen and (min-width: 1000px) {
    padding: 20vh 0 0 3vw;
    max-width: 50%;
  }
`;

const blinkTextCursor = keyframes`
  from {border-right-color: rgba(0, 0, 0, .75);}
  to {border-right-color: transparent}
`;

const TextCursor = styled.span`
  color: white;
  display: inline;
  animation: ${blinkTextCursor} 0.7s steps(44) infinite normal;
`;

const TextLeft = styled.span`
  color: #baa5da;
  font-size: 2vw;
  width: 90vw;
  text-align: center;
  font-family: 'Fugaz One', serif;
  @media only screen and (min-width: 1000px) {
    font-size: 7vh;
    width: 45vw;
    text-align: left;
  }
`;

const Circle = styled.div`
  position: absolute;
  top: 69vh;
  left: 25vw;
  width: 200px / 2;
  height: 200px;
  border-radius: 50%;
  display: none;
  background-color: #e36c6c;
  justify-content: center;
  align-items: center;
  @media only screen and (min-width: 1000px) {
    display: flex;
  }
`

const StimuDate = styled.div`
  position: absolute;
  width: 150px;
  height: 150px;
  border-radius: 50%;
  display: none;
  justify-content: center;
  align-items: center;
  font-size: 42px;
  font-weight: 800;
  color: #ffffff;
  font-family: 'Fugaz One', serif;
  @media only screen and (min-width: 1000px) {
    display: flex;
  }
`

const rotateText = keyframes`
  0% {
    transform: rotate(360deg);
  }

  100% {
    transform: rotate(0deg)
  }
`

const StimuText = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  color: #ffffff;
  animation: ${rotateText} 8s linear infinite;
  @media only screen and (min-width: 1000px) {
    display: inline-block;
  }
`


const StimuSpan = styled.span`
  position: absolute;
  left: 50%;
  font-size: 20px;
  font-weight: 500;
  padding: 2px;
  font-family: monospace;
  transform-origin: 0 100px;
`

export default Hero;
