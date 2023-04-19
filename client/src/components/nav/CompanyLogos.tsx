import styled from 'styled-components';
import tter from '../../assets/images/companyLogos/tter_logo.svg';
import testi2 from '../../assets/images/companyLogos/testi2.png';
import testi3 from '../../assets/images/companyLogos/testi3.png';

const CompanyLogos = () => {
  return (
    <Container>
      <TitleText>Yhteistyökumppanit</TitleText>
      <LogoList>
        <Logo src={tter} alt="testi1" style={{ width: '200px' }} />
      </LogoList>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  padding-bottom: 200px;
  @media only screen and (min-width: 1000px) {
    display: flex;
  }
`;

const TitleText = styled.h1`
  color: #37105a;
  font-family: 'Fugaz One', serif;
  padding: 2rem;
`;

const LogoList = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
`;

const Logo = styled.img`
  padding: 10px;
`;

export default CompanyLogos;
