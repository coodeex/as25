import styled from 'styled-components';
import { rootCertificates } from 'tls';
import Kuva1 from '../../assets/images/AS_kuva1.jpg';
import Kuva2 from '../../assets/images/AS_kuva2.jpg';
import Kuva3 from '../../assets/images/kuva2.jpg';

const TextBoxes = () => {
  return (
    <Boxes>
      <Box>
        <Image image={Kuva1} style={{ transform: 'rotate(-5deg)' }} />
        <TitleText>
          Juhlavuosi tuo tullessaan paljon uusia tapahtumia ja aktiviteetteja!
        </TitleText>
      </Box>
      <BoxRight>
        <Image image={Kuva2} style={{ transform: 'rotate(5deg)' }} />
        <TitleText>
          Vuoden aikana tutustutaan AS historiaan sekä nykyiseen kiltakulttuuriin
        </TitleText>
      </BoxRight>
      <Box>
        <Image image={Kuva3} style={{ transform: 'rotate(-5deg)' }} />
        <TitleText>
          Marraskuussa vuosi huipentuu Stimulaatioon, eli AS-killan vuosijuhlaan!
        </TitleText>
      </Box>
    </Boxes>
  );
};

const Boxes = styled.div`
  padding: 50px 0;
`;

const Image = styled.div<{ image: string }>`
  margin: 50px 10px;
  max-width: 80vw;
  width: 80vw;
  height: 50vh;
  background-image: url(${props => props.image || Kuva1});
  background-repeat: no-repeat;
  background-size: cover;
  @media only screen and (min-width: 1000px) {
    max-width: 50vw;
    width: 40vw;
    height: 50vh;
  }
`;

const Box = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-left: 20px;

  @media only screen and (min-width: 800px) {
    flex-direction: row;
    height: 60vh;
  }
`;

const BoxRight = styled.div`
  height: 70vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-right: 8vw;
  @media only screen and (min-width: 800px) {
    flex-direction: row-reverse;
  }
`;

const TitleText = styled.span`
  color: #baa5da;
  font-size: 32px;
  width: 90vw;
  font-family: 'Fugaz One', serif;
  padding: 0 30px 0 30px;

  @media only screen and (min-width: 800px) {
    width: 45vw;
    font-size: 5vh;
    padding: 0 3vw 0 3vw;
  }
`;

export default TextBoxes;
