import 'react-vertical-timeline-component/style.min.css';

import {
  VerticalTimeline,
  VerticalTimelineElement,
} from 'react-vertical-timeline-component';

const Timeline = () => {
  return (
    <VerticalTimeline>
      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        contentStyle={{ background: 'rgb(136, 95, 183)', color: '#fff' }}
        contentArrowStyle={{ borderRight: '7px solid  rgb(52, 4, 82)' }}
        date="17.4."
        iconStyle={{ background: 'rgb(95, 51, 126)', color: '#fff' }}
      >
        <h3 className="vertical-timeline-element-title">Peli- ja ompeluilta</h3>
        <h5 className="vertical-timeline-element-subtitle">ASn Wappukontti Alvarilla</h5>
        <p>
          Pelailua ja ompelua yhdessä muiden Wappua odottelevien aASien! Klo. 18 alkaen
        </p>
      </VerticalTimelineElement>
      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        contentStyle={{ background: 'rgb(145, 95, 183)', color: '#fff' }}
        contentArrowStyle={{ borderRight: '7px solid  rgb(52, 4, 82)' }}
        date="18.4."
        iconStyle={{ background: 'rgb(105, 51, 126)', color: '#fff' }}
      >
        <h3 className="vertical-timeline-element-title">KiASmAS</h3>
        <h5 className="vertical-timeline-element-subtitle">Kiasma, Helsinki</h5>
        <p>
          Kylttyyrielämys Helsingin upeimmassa museossa! Ilmainen, mutta ilmoittautuminen
          pakollista. Tapahtuma alkaa klo.14 Kiasmassa.
        </p>
      </VerticalTimelineElement>
      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        contentStyle={{ background: 'rgb(157, 95, 183)', color: '#fff' }}
        contentArrowStyle={{ borderRight: '7px solid  rgb(52, 4, 82)' }}
        date="19.4."
        iconStyle={{ background: 'rgb(112, 51, 126)', color: '#fff' }}
      >
        <h3 className="vertical-timeline-element-title">Aasipiknik</h3>
        <h5 className="vertical-timeline-element-subtitle">ASn Wappukontti Alvarilla</h5>
        <p>
          Tule rapsuttelemaan ihka oikeita aaseja, siis niitä eläimiä! Ja piknikkiinhän
          tietysti kuuluu myös naposteltavia ja virvokkeita.
        </p>
      </VerticalTimelineElement>
      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        contentStyle={{ background: 'rgb(164, 95, 183)', color: '#fff' }}
        contentArrowStyle={{ borderRight: '7px solid  rgb(52, 4, 82)' }}
        date="20.4."
        iconStyle={{ background: 'rgb(125, 51, 126)', color: '#fff' }}
      >
        <h3 className="vertical-timeline-element-title">Saunailta</h3>
        <h5 className="vertical-timeline-element-subtitle">Ossinsauna</h5>
        <p>
          Mitä olisikaan hyvinvointiviikko ilman saunailtaa?! Tule nauttimaan löylyistä
          Ossinsaunalle.
        </p>
      </VerticalTimelineElement>
      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        contentStyle={{ background: 'rgb(176, 95, 183)', color: '#fff' }}
        contentArrowStyle={{ borderRight: '7px solid  rgb(52, 4, 82)' }}
        date="21.4."
        iconStyle={{ background: 'rgb(126, 51, 117)', color: '#fff' }}
      >
        <h3 className="vertical-timeline-element-title">Leffailta</h3>
        <h5 className="vertical-timeline-element-subtitle">Kinopoli</h5>
        <p>
          Mitä leffaa katsotaan? Sitä nettisivukoodari ei tiedä, mutta tulet varmasti
          nauttimaan elokuvaelämyksestä Kinopolilla kera aASikamujen!
        </p>
      </VerticalTimelineElement>
      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        contentStyle={{ background: 'rgb(153, 66, 143)', color: '#fff' }}
        contentArrowStyle={{ borderRight: '7px solid  rgb(52, 4, 82)' }}
        date="TBA"
        iconStyle={{ background: 'rgb(104, 35, 84)', color: '#fff' }}
      >
        <h3 className="vertical-timeline-element-title">Eskalaatio</h3>
        <h5 className="vertical-timeline-element-subtitle">Paikka ja aika TBA</h5>
        <p>
          Eskalaatio on AS-killan puolivuotisjuhla, eli 24,5-vuotisjuhla tänä vuonna. Huhu
          kertoo, että tän vuoden Eskalaatio on jotain aivan uutta ja hienoa. Kannattaa
          siis pysyä kuulolla suunnitelmista!
        </p>
      </VerticalTimelineElement>
      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        contentStyle={{ background: 'rgb(133, 55, 124)', color: '#fff' }}
        contentArrowStyle={{ borderRight: '7px solid  rgb(52, 4, 82)' }}
        date="TBA"
        iconStyle={{ background: 'rgb(84, 28, 68)', color: '#fff' }}
      >
        <h3 className="vertical-timeline-element-title">AS-killan kesäpäivät</h3>
        <h5 className="vertical-timeline-element-subtitle">Paikka ja aika TBA</h5>
        <p>
          Tällaisetkin ovat tulossa pitkästä aikaa! Killan kesäpäivät ovat avoin tapahtuma
          kaikille. Joten, jos kiltakavereita tulee ikävä kesän aikana, niin tää tapahtuma
          auttaa!
        </p>
      </VerticalTimelineElement>
      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        contentStyle={{ background: 'rgb(133, 55, 124)', color: '#fff' }}
        contentArrowStyle={{ borderRight: '7px solid  rgb(52, 4, 82)' }}
        date="20.-25.11."
        iconStyle={{ background: 'rgb(84, 28, 68)', color: '#fff' }}
      >
        <h3 className="vertical-timeline-element-title">Stimuviikko</h3>
        <h5 className="vertical-timeline-element-subtitle">Everything, everywhere</h5>
        <p>
          Stimuviikko on vuosijuhlan hypeintä aikaa! Voin luvata, että tämä viikko on
          täynnä mitä mahtavinta aASeilua!
        </p>
      </VerticalTimelineElement>
      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        contentStyle={{ background: 'rgb(113, 45, 106)', color: '#fff' }}
        contentArrowStyle={{ borderRight: '7px solid  rgb(52, 4, 82)' }}
        date="24.11."
        iconStyle={{ background: 'rgb(69, 20, 63)', color: '#fff' }}
      >
        <h3 className="vertical-timeline-element-title">25. Stimulaatio</h3>
        <h5 className="vertical-timeline-element-subtitle">24.11.</h5>
        <p>
          Tämä akateeminen ja juhlavista juhlavin tapahtuma, eli AS-killan vuosijuhla,
          kruunaa juhlavuoden!
        </p>
      </VerticalTimelineElement>
      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        contentStyle={{ background: 'rgb(113, 45, 106)', color: '#fff' }}
        contentArrowStyle={{ borderRight: '7px solid  rgb(52, 4, 82)' }}
        date="25.11."
        iconStyle={{ background: 'rgb(69, 20, 63)', color: '#fff' }}
      >
        <h3 className="vertical-timeline-element-title">Stillis</h3>
        <h5 className="vertical-timeline-element-subtitle">25.11.</h5>
        <p>
          Tuliko Stimun jälkeen väsy? Ja ehkä vähän nälkäkin? Täällä voit chillailla ja
          syödä mitä maittavinta ruokaa kanssa muiden Stimuilijoiden. Tämä hyvinvoinnin
          kulminaatiopiste päättää juhlavuoden
        </p>
      </VerticalTimelineElement>
    </VerticalTimeline>
  );
};

export default Timeline;
