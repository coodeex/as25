import styled from 'styled-components';
import Text from '../components/common/Text';
import TextBoxes from './homeComponents/TextBoxes';
import CompanyLogos from './homeComponents/CompanyLogos';
import Hero from './homeComponents/Hero';

const Home = () => {
  return (
    <div>
      {/*<Text variant="body" >AS-kilta</Text>*/}
      <Hero />
      <TextBoxes />
      <CompanyLogos />
    </div>
  );
};

export default Home;
