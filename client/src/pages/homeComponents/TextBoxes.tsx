import styled from 'styled-components';

const TextBoxes = () => {
  return (
    <div>
        <TopText>
            AS-kilta
        </TopText>
        <SecondText>
            Killan tarkoituksena on yhdistää Automaatio- ja informaatioteknologian opiskelijoita ja edistää heidän yhteiskunnallisia, 
            sosiaalisia ja henkisiä, 
            sekä opiskeluun ja opiskelijan asemaan yliopistossa ja yhteiskunnassa liittyviä pyrkimyksiä, 
            sekä kasvattaa heistä teekkari- ja ammatti-identiteetiltään vahvoja osaajia. 
            Kilta toimii Aalto-yliopiston ylioppilaskunnan AYY:n piirissä.
        </SecondText>
    </div>
  );
};

const TopText = styled.div`
    font-family: Arial, sans-serif;
    font-size: 40px;
    color: #ffc0cb;;
    font-weight: bold;
    text-align: center;
    padding: 0px 0px 50px 0px;
`;

const SecondText = styled.div`
    font-family: Arial, sans-serif;
    font-size: 16px;
    color: #ffc0cb;;
    font-weight: bold;
    text-align: center;
`;

export default TextBoxes;