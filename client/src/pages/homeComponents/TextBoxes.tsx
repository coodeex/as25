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

const Boxes = styled.div``;

const Image = styled.img`
  height: 60vh;
  padding: 30px;
`;

const Box = styled.div`
  height: 90vh;
  display: flex;
  flex-direction: row;
  align-items: center;
  padding-left: 8vw;
`;

const BoxRight = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: row-reverse;
  align-items: center;
  padding-right: 8vw;
`;

const TitleText = styled.span`
  color: #baa5da;
  font-size: 5vh;
  width: 45vw;
  font-family: 'Fugaz One', serif;
  padding: 0 3vw 0 3vw;
`;

export default TextBoxes;
