import styled from 'styled-components';
import tter from '../../assets/images/companyLogos/tter_logo.svg';
import aTalent from '../../assets/images/companyLogos/aTalent_Logo_Black.png'
import sas from '../../assets/images/companyLogos/SAS_Logo_eng_5.png'

const CompanyLogos = () => {
  return (
    <Container>
      <TitleText>Yhteistyökumppanit</TitleText>
      <LogoList>
        <Logo src={tter}  style={{ width: '200px' }} />
        <Logo src={aTalent}  style={{ height: '85px', width: '300px' }}/>
        <Logo src={sas}  style={{ width: '500px' }} />
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
  align-items: center;
  gap: 20px;
`;

const Logo = styled.img`
  padding: 10px;
`;

export default CompanyLogos;
