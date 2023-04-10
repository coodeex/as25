import styled, { keyframes } from 'styled-components';
import Text from '../components/common/Text';
import TextBoxes from './homeComponents/TextBoxes';
import CompanyLogos from '../components/nav/CompanyLogos';
import Hero from './homeComponents/Hero';

const Stimulaatio = () => {
  const stimutext = '25. Stimulaatio 25. Stimulaatio 25. Stimulaatio ';
  return (
    <Container>
      <Circle>
        <StimuDate>24.11.</StimuDate>
        <StimuText className="text">
          {stimutext.split('').map((char, i) => (
            <StimuSpan style={{ transform: `rotate(${i * 7.5}deg)` }}>{char}</StimuSpan>
          ))}
        </StimuText>
      </Circle>
    </Container>
  );
};

const Container = styled.div`
  height: 1000px;
`;

const Circle = styled.div`
  position: absolute;
  top: 25%;
  left: 50%;
  width: 400px / 2;
  height: 400px;
  border-radius: 50%;
  display: flex;
  background-color: #e36c6c;
  justify-content: center;
  align-items: center;
  @media only screen and (min-width: 1000px) {
    display: flex;
    top: 15%;
    left: 50%;
    width: 800px / 2;
    height: 800px;
    border-radius: 50%;
    background-color: #e36c6c;
    justify-content: center;
    align-items: center;
  }
`;

const StimuDate = styled.div`
  position: absolute;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 102px;
  font-weight: 800;
  color: #ffffff;
  font-family: 'Fugaz One', serif;
  @media only screen and (min-width: 1000px) {
    display: flex;
  }
`;

const rotateText = keyframes`
  0% {
    transform: rotate(360deg);
  }

  100% {
    transform: rotate(0deg)
  }
`;

const StimuText = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  color: #ffffff;
  animation: ${rotateText} 20s linear infinite;
  @media only screen and (min-width: 1000px) {
    display: inline-block;
  }
`;

const StimuSpan = styled.span`
  position: absolute;
  left: 50%;
  left: 50%;
  font-size: 25px;
  font-weight: 500;
  padding: 2px;
  font-family: monospace;
  transform-origin: 0 200px;
  @media only screen and (min-width: 1000px) {
    font-size: 65px;
    font-weight: 500;
    padding: 2px;
    font-family: monospace;
    transform-origin: 0 400px;
  }
`;

export default Stimulaatio;
