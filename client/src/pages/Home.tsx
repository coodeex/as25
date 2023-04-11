import styled from 'styled-components';
import Text from '../components/common/Text';
import TextBoxes from './homeComponents/TextBoxes';
import Hero from './homeComponents/Hero';

const Home = () => {
  return (
    <div>
      {/*<Text variant="body" >AS-kilta</Text>*/}
      <Hero />
      <TextBoxes />
    </div>
  );
};

export default Home;
