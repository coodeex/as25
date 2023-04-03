import styled from 'styled-components';
import { rootCertificates } from 'tls';
import Kuva1 from '../../assets/images/AS_kuva1.jpg';
import Kuva2 from '../../assets/images/AS_kuva2.jpg';
import Kuva3 from '../../assets/images/kuva2.jpg';

const TextBoxes = () => {
  return (
    <Boxes>
      <Box>
        <Image src={Kuva1} style={{ transform: 'rotate(-5deg)' }} />
        <TitleText>
          Juhlavuosi tuo tullessaan paljon uusia tapahtumia ja aktiviteetteja!
        </TitleText>
      </Box>
      <BoxRight>
        <Image src={Kuva2} style={{ transform: 'rotate(5deg)' }} />
        <TitleText>
          Vuoden aikana tutustutaan AS historiaan sekä nykyiseen kiltakulttuuriin
        </TitleText>
      </BoxRight>
      <Box>
        <Image src={Kuva3} style={{ transform: 'rotate(-5deg)' }} />
        <TitleText>
          Marraskuussa vuosi huipentuu Stimulaatioon, eli AS-killan vuosijuhlaan!
        </TitleText>
      </Box>
    </Boxes>
  );
};

const Boxes = styled.div`
  padding-bottom: 50px;
`;

const Image = styled.img`
  padding: 40px 0;
  max-width: 80vw;
  @media only screen and (min-width: 1000px) {
    max-width: 50vw;
  }
`;

const Box = styled.div`
  height: 90vh;

  display: flex;
  flex-direction: column;
  align-items: center;
  padding-left: 8vw;

  @media only screen and (min-width: 1000px) {
    flex-direction: row;
  }
`;

const BoxRight = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-right: 8vw;
  @media only screen and (min-width: 1000px) {
    flex-direction: row-reverse;
  }
`;

const TitleText = styled.span`
  color: #baa5da;
  font-size: 5vh;
  width: 90vw;
  font-family: 'Fugaz One', serif;
  padding: 0 3vw 0 3vw;

  @media only screen and (min-width: 1000px) {
    width: 45vw;
  }
`;

export default TextBoxes;
