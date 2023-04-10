import styled from 'styled-components';

const Info = () => {
  return (
    <InfoContainer>
      <Title>Yleistä AS25-infoa</Title>
      <ResponsiblePerson>Vastuuhenkilöt</ResponsiblePerson>
      <PeopleContainer>
        <Person>
          <h2>AS25-juhlavuoden Kvartaalimestari</h2>
          <div>Kiira Metsoila</div>
          <div>TG: @kiiraiitu</div>
        </Person>
        <Person>
          <h2>Stimulantti</h2>
          <div>Meri Hilden</div>
          <div>TG: @Merinomainen</div>
        </Person>
        <Person>
          <h2>Stimulantti</h2>
          <div>Meri Hiipakka</div>
          <div>TG: @Merisku</div>
        </Person>
      </PeopleContainer>
    </InfoContainer>
  );
};

const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 100vh;
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
  width: 100%;
  padding-top: 20px;
  @media only screen and (min-width: 700px) {
    width: 80%;
    max-width: 750px;
  }
`;

const Person = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 24px;
  align-items: center;
  color: #baa5da;
  text-align: center;
  padding-bottom: 40px;
  @media only screen and (min-width: 700px) {
    display: grid;
    text-align: left;
    grid-template-columns: 45% 30% auto;
    color: #baa5da;
    font-size: auto;
  }
`;

export default Info;
