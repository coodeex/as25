import './App.css';

import styled from 'styled-components';

import { Nav } from './components/nav';

function App() {
  return (
    <div>
      <Nav />
    </div>
  );
}

const Div = styled.div`
  padding: 300px;
`;

export default App;
