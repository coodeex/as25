import styled from 'styled-components';
import testi1 from '../../pictures/companyLogos/testi1.png';
import testi2 from '../../pictures/companyLogos/testi2.png';
import testi3 from '../../pictures/companyLogos/testi3.png';

const CompanyLogos = () => {
  return (
    <LogoList> 
      <img src={testi1} alt="testi1" style={{ width: "200px", height: "100px" }} />
      <img src={testi2} alt="testi2" style={{ width: "200px", height: "100px" }} />
      <img src={testi3} alt="testi3" style={{ width: "200px", height: "100px" }} />
    </LogoList>
  );
};

const LogoList = styled.div`
  padding-top: 500px;
  display: flex;
  justify-content: space-evenly;
`;

export default CompanyLogos;
