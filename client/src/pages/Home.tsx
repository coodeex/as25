import styled from 'styled-components';
import Text from '../components/common/Text';
import TextBoxes from './homeComponents/TextBoxes';
import CompanyLogos from './homeComponents/CompanyLogos';

const Home = () => {
  return (
    <div> 
      {/*<Text variant="body" >AS-kilta</Text>*/}
      <TextBoxes />
      <CompanyLogos />
    </div>
  );
};


export default Home;
