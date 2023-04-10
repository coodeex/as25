import styled from 'styled-components';

const Info = () => {
  return (
    <InfoContainer>
      <Title>Yleistä AS25-infoa</Title>
      <ResponsiblePerson>Vastuuhenkilöt</ResponsiblePerson>
      <PeopleContainer>
        <Person>
          <p>AS25-juhlavuoden Kvartaalimestari</p>
          <p>Kiira Metsoila</p>
          <p>TG: @kiiraiitu</p>
        </Person>
        <Person>
          <p>Stimulantti</p>
          <p>Meri Hilden</p>
          <p>TG: @Merinomainen</p>
        </Person>
        <Person>
          <p>Stimulantti</p>
          <p>Meri Hiipakka</p>
          <p>TG: @Merisku</p>
        </Person>
      </PeopleContainer>
    </InfoContainer>
  );
};

const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100vh;
`;

const Title = styled.div`
  font-size: 5vh;
  color: #baa5da;
  font-family: 'Fugaz One', serif;
  padding-bottom: 50px;
`;

const ResponsiblePerson = styled.div`
  font-size: 32px;
  color: #baa5da;
  font-family: 'Fugaz One', serif;
`;

const PeopleContainer = styled.div`
  width: 60%;
  padding-top: 20px;
`;

const Person = styled.div`
  display: grid;
  grid-template-columns: 50% 25% auto;
  color: #baa5da;
  font-size: 26px;
`;

export default Info;
