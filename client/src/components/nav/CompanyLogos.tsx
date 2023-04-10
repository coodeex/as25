import styled from 'styled-components';
import testi1 from '../../assets/images/companyLogos/testi1.png';
import testi2 from '../../assets/images/companyLogos/testi2.png';
import testi3 from '../../assets/images/companyLogos/testi3.png';

const CompanyLogos = () => {
  return (
    <Container>
      <TitleText>Yhteistyökumppanit</TitleText>
      <LogoList>
        <Logo src={testi1} alt="testi1" style={{ width: '200px', height: '100px' }} />
        <Logo src={testi2} alt="testi2" style={{ width: '200px', height: '100px' }} />
        <Logo src={testi3} alt="testi3" style={{ width: '200px', height: '100px' }} />
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
