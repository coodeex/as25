import { useEffect, useState } from 'react';
import styled, { keyframes } from 'styled-components';
import AS25Logo from '../../assets/images/mustaTausta.png';
import '../../App.css';

const Hero = () => {
  const textleft = 'Tervetuloa mukaan aASien riemujuhlaan!';
  const [text, setText] = useState('');

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
      {/* <LogoContainer> */}
      <Logo src={AS25Logo} alt="Logo" />
      {/* </LogoContainer> */}
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

// const LogoContainer = styled.div`
//   position: absolute;
//   width: 100vw;
//   height: 80vh;
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   border: 0;
// `;

const MobileContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
`;

const MobileLogo = styled.img`
  padding-left: 40px;
  max-width: 100vw;
  max-height: 600px;
  margin-left: -50px;
  @media only screen and (min-width: 1000px) {
    display: none;
    height: 80vh;
  }
`;

const Logo = styled.img`
  max-width: 99vw;
  display: none;
  height: 80vh;
  @media only screen and (min-width: 1000px) {
    display: inline;
  }
`;

const Container = styled.div`
  display: flex;
  padding: 0 0 0 3vw;
  max-height: 600px;
  @media only screen and (min-width: 1000px) {
    padding: 20vh 0 0 3vw;
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
  font-size: 4vh;
  width: 90vw;
  text-align: center;
  font-family: 'Fugaz One', serif;
  @media only screen and (min-width: 1000px) {
    font-size: 7vh;
    width: 45vw;
    text-align: left;
  }
`;

export default Hero;
