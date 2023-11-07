import styled, { keyframes } from 'styled-components';
import Text from '../components/common/Text';
import TextBoxes from './homeComponents/TextBoxes';
import CompanyLogos from '../components/nav/CompanyLogos';
import Hero from './homeComponents/Hero';
import { Div } from '../components/Div';
import { Button } from 'react-bootstrap';
import { useState } from 'react';

const Stimulaatio = () => {
  const stimutext = '25. Stimulaatio 25. Stimulaatio 25. Stimulaatio ';
  const [language, setLanguage] = useState('Finnish')

  const switchLanguage = () => {
    if (language === 'Finnish'){
      setLanguage('English')
    } else {setLanguage('Finnish')}
  }

  const Finnish = (
  <div>
    <Hook>Tervetuloa Stimulaatioon!</Hook>
    <SwitchButton onClick={() => switchLanguage()} style={{backgroundColor: '#5f3389', color: '#dfd4ee', borderColor: '#5c1a9b'}}>Switch to English</SwitchButton>
    <p>Tervetuloa juhlimaan 25-vuotiasta Automaatio- ja systeemitekniikan kiltaa Stimulaatioon perjantaina 24. marraskuuta 2023.</p>

    <p>Korkkaamme juhlan tyylikk&auml;&auml;sti cocktailtilaisuudella osoitteessa Tivolitie 10 klo 15 alkaen, jonka j&auml;lkeen juhlinta jatkuu loisteliaalla p&auml;&auml;juhlatilaisuudella Ravintola T&ouml;&ouml;l&ouml;ss&auml;. T&auml;m&auml;n j&auml;lkeen jatkoilla p&auml;&auml;see tanssimaan y&ouml;n pikkutunneille asti ja juhlinta jatkuu lauantaina 25.11. rentouttavan Stilliksen merkeiss&auml; Otakaari 20:ssa. 
    </p>
    <h2 style={{color: '#baa5da'}}>Etiketti</h2>
<h3 style={{color: '#baa5da'}}>Käytös</h3>
<p>
 
Vuosijuhlat ovat arvokas pöytäjuhla, jossa vierailta odotetaan hyviä pöytätapoja ja muiden vieraiden kunnioittamista. Ethän siis huutele kovaan ääneen, käytä puhelintasi koko aikaa ja kuuntelethan puheet ja mahdolliset esitykset keskeyttämättä ja häiritsemättä. 
 
Laulujen ja puheiden aikana on myös kohteliasta olla syömättä ja juomatta. Vuosijuhlat eroavat teekkarisitseistä myös siten, että tilaisuuden aikana pidetään sitsitauko, jonka aikana voit käydä vierailemassa muissa pöydissä, puuteroimassa nenäsi tai vaikka suorittaa myöhäisillan bisnespuhelun. Kohteliasta on myös olla sammumatta pöytään juhlan aikana.
 </p>
<h3 style={{color: '#baa5da'}}>Juhlan kulku</h3>
<p>
 
Cocktail-tilaisuudessa eri kiltojen ja muiden yhteisöjen edustajat voivat antaa hallitukselle lahjan. Lahjan antajaksi ilmoittaudutaan jo itse juhlaan ilmoittautuessa ja lahjananto koskee lähinnä kutsuvieraita. Cocktail-tilaisuudesta siirrytään pääjuhlapaikalle yleensä bussikuljetuksella.
 
Pääjuhlassa jokaiselle on oma paikkansa ja paikalta ei tule poistua juhlan aikana muuta kuin aivan välttämättömissä tapauksissa. On kohteliasta esittäytyä vieressä istuville henkilöille, jos et heitä tunne. Skoolausjärjestys on sama kuin sitseillä: ensin viistosti vasemmalla olevalle henkilölle, sitten viistosti oikealle ja vielä eteen.
 
Vuosijuhlilla kuullaan muutamia puheita, ja niiden järjestys on yleensä esitetty pöydissä sijaitsevissa pöytäohjelmissa. Seremoniamestari ilmoittaa aina, kun jokin puhe tai muu tärkeä asia on alkamassa, jolloin on syytä hiljentyä kuuntelemaan.
 
Vuosijuhlien ei ole tarkoitus olla pelkkää pönötystä ja juuri maalaisjärjellä ja hyviä käytöstapoja noudattamalla pärjää pitkälle! Vuosijuhlat ovat kuitenkin arvokas tapahtuma ja siksi koitetaan parhaamme mukaan kunnioittaa tapahtuman luonnetta.
 
</p>
<h2 style={{color: '#baa5da'}}>Dress Code</h2>
<p>
 
Pukukoodi vuosijuhlilla on yleensä juhlapuku, ja tämä voi tarkoittaa siis frakkia tai iltapukua. Pukukoodin voi tulkita itselle sopivalla tavalla, kunhan se on juhlava. Esimerkiksi frakin sijaan värikäs puku ei ole juhlava, mutta tumma puku on. Jos haluat pukea mekon, yleinen ohje iltapuvulle on pitkä. Pukukoodi ei kuitenkaan ole kiveen hakattu!
 
</p>
<h3 style={{color: '#baa5da'}}>Kunniamerkit ja nauhat</h3>
<p>
 
Eri järjestöillä ja killoilla voi olla omia kunnia-/ansiomerkkejään ja/tai nauhojaan. Kunniamerkillä tai nauhalla voi olla jokin oma käyttöohjesääntönsä, jonka todennäköisesti itse tiedät kun sellaisen saat.
 
Yleisiä ohjeita nauhoille on, että kantajalla olisi hyvä olla rajoitettu nauhojen määrä maksimissaan kolmeen erilaiseen ja nauha ei saa koskettaa paljasta ihoa. Nauhan voi myös itse taiteilla rusetiksi, joka onkin iltapukujen kanssa yleensä helpompi ratkaisu. Jos sinulla on useampi nauha, joita kuuluu käyttää ylimpänä, et voi käyttää niitä samanaikaisesti. Nauhaa myös pidetään aina oikealta olkapäältä vasemmalle lantiolle.
</p>
    <p>Mik&auml;li teill&auml; on kysymyksi&auml; tai muuta asiaa j&auml;rjest&auml;jille voitte ottaa yhteytt&auml; Stimulantteihin s&auml;hk&ouml;postitse stimulaatio@as.fi tai telegramissa @merisku ja @merinomainen.</p>

    <p style={{color: '#baa5da'}}>N&auml;hd&auml;&auml;n marraskuussa!</p>
    </div>
    )

    const English = (<div>
    <Hook>Welcome to Stimulaatio!</Hook>
    <SwitchButton onClick={() => switchLanguage()} style={{backgroundColor: '#5f3389', color: '#dfd4ee', borderColor: '#5c1a9b'}}>Suomeksi</SwitchButton>

    <p>Welcome to celebrate the 25th anniversary of the Guild of Automation and Systems Technology at Stimulaatio on Friday 24 November 2023.</p>
    
    <p>We will start off the celebrations in style with a cocktail party at Tivolitie 10 from 15:00, followed by a glamorous main event at Restaurant Töölö. Afterwards, you can dance the night away and the celebrations will continue on Saturday 25 November with a relaxing Styllis at Otakaari 20.</p>

    <p>If you have any questions or other matters for the organizers, you can contact the Stimulants via e-mail stimulaatio@as.fi or telegram @merisku ja @merinomainen.</p>
    
    <h2 style={{color: '#baa5da'}}>
    Etiquette
    </h2>
<h3 style={{color: '#baa5da'}}>Conduct</h3>
<p>
 
An anniversary party is a dignified table celebration where good table manners and respect for other guests are expected. So please do not shout loudly, use your phone at all times and listen to speeches and any presentations without interruption or distraction. 
 
It is also polite not to eat or drink during songs and speeches. An anniversary party also differs from normal sitsis in that there is a break during the ceremony, during which you can visit other tables, powder your nose or even make a late-night business call. It is also polite not to pass out at the table during the party.
 
</p>
<h3 style={{color: '#baa5da'}}>Party Schedule</h3>
<p>
 
At the cocktail reception, representatives from various guilds and other associations can give a gift to the board. The gift-giver is identified when registering for the party itself and the gift-giving is mainly for the invited guests. The cocktail party is usually followed by a shuttle bus to the main party venue.
 
Everyone has a seat at the main party and should not leave during the party except in absolutely essential circumstances. It is polite to introduce yourself to the people sitting next to you if you do not know them. The order of stooling is the same as at a sitsis: first diagonally to the person on the left, then diagonally to the right and then to the front.
 
There are a few speeches at the annual party, and the order of these is usually shown on the table programmes at the tables. The Master of Ceremonies always announces when a speech or other important matter is about to begin, at which point it is a good idea to stop and listen.
 
An annual party is not meant to be a fuss and it is common sense and good manners that will take you a long way! However, it is a worthy event and so do your best to respect the nature of the event.
 

</p>
<h3 style={{color: '#baa5da'}}>Dress Code</h3>
<p>
 
The dress code for the annual party is usually formal attire, and this can mean a tailcoat or evening dress. The dress code can be interpreted in any way that suits you, as long as it is festive. For example, a colourful suit instead of a tails is not festive, but a dark suit is. If you want to wear a dress, the general pattern for an evening dress is long. However, the dress code is not set in stone!
 
##### Decorations and ribbons
</p>
<h3 style={{color: '#baa5da'}}>Badges and Ribbons</h3>
<p>
 
Different organisations and guilds may have their own badges of honour/merit and/or ribbons. A badge or ribbon may have its own rules of use, which you will probably know when you receive it.
 
General guidelines for ribbons are that the wearer should be limited to a maximum of three different ribbons and the ribbon should not touch bare skin. You can also make the ribbon yourself into a bow, which is usually easier with evening dresses. If you have more than one ribbon to wear on top, you cannot wear them at the same time. The ribbon is also always worn from the right shoulder to the left hip.

    </p>
    <p style={{color: '#baa5da'}}>See you in November!</p>
    </div>)


  return (
    <div style={{overflow:'none'}}>
    <Container>
      <Circle>
        <StimuDate>24.11.</StimuDate>
        <StimuText className="text">
          {stimutext.split('').map((char, i) => (
            <StimuSpan style={{ transform: `rotate(${i * 7.5}deg)` }}>{char}</StimuSpan>
          ))}
        </StimuText>
      </Circle>
    </Container>
    <div style={{margin: "0 10vw"}}>
      
      <InfoText>
        {language === 'Finnish' ? Finnish : English}
      </InfoText>
    </div>
    </div>
  );
};

const SwitchButton = styled.button`
  color: white;
  font-size: 18px;
  font-family: "Roboto", sans-serif;
  font-weight: 300;
  @media only screen and (min-width: 1000px) {
    font-size: 20px;
  }
`;

const InfoText = styled.div`
  color: white;
  font-size: 18px;
  font-family: "Roboto", sans-serif;
  font-weight: 300;
  padding-bottom: 100px;
  @media only screen and (min-width: 1000px) {
    font-size: 25px;
  }
`;

const English = styled.div`
  color: white;
  font-family: "Roboto", sans-serif;
  font-weight: 300;
`;

const Finnish = styled.div`
  color: white;
  font-family: "Roboto", sans-serif;
  font-weight: 300;
`;

const Hook = styled.div`
  font-size: 40px;
  color: #baa5da;
  font-family: 'Fugaz One', serif;
  padding-bottom: 0px;
  @media only screen and (min-width: 1000px) {
    font-size: 50px;
  }
`;

const Container = styled.div`
  height: 60vh;
  min-height: 500px;
`;

const Circle = styled.div`
  position: absolute;
  top: 25%;
  left: 50%;
  width: 400px / 2;
  height: 400px;
  border-radius: 50%;
  display: flex;
  background-color: #e36c6c;
  justify-content: center;
  align-items: center;
  /* @media only screen and (min-width: 1000px) {
    display: flex;
    top: 10%;
    left: 50%;
    width: 700px / 2;
    height: 700px;
    border-radius: 50%;
    background-color: #e36c6c;
    justify-content: center;
    align-items: center;
  } */
`;

const StimuDate = styled.div`
  position: absolute;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 80px;
  font-weight: 800;
  color: #ffffff;
  font-family: 'Fugaz One', serif;
  @media only screen and (min-width: 1000px) {
    display: flex;
  }
`;

const rotateText = keyframes`
  0% {
    transform: rotate(360deg);
  }

  100% {
    transform: rotate(0deg)
  }
`;

const StimuText = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  color: #ffffff;
  animation: ${rotateText} 20s linear infinite;
  @media only screen and (min-width: 1000px) {
    display: inline-block;
  }
`;

const StimuSpan = styled.span`
  position: absolute;
  left: 50%;
  left: 50%;
  font-size: 35px;
  font-weight: 500;
  padding: 2px;
  font-family: monospace;
  transform-origin: 0 200px;
  /* @media only screen and (min-width: 1000px) {
    font-size: 65px;
    font-weight: 500;
    padding: 2px;
    font-family: monospace;
    transform-origin: 0 350px;
  } */
`;

export default Stimulaatio;
