import './App.css';

import { Route, Routes } from 'react-router-dom';
import styled from 'styled-components';

import { Home, R } from './api/Api';
import { ComponentSandbox } from './components/common/ComponentSandbox';
import { NoMatch } from './components/common/NoMatch';
import { Game } from './components/game/Game';
import { HotToast } from './components/HotToast';
import { Navigation } from './components/nav/Navigation';
import { theme } from './components/style/theme';
import { Chat } from './components/telegram/Chat';

const App = () => {
  return (
    <PageWrapper>
      {/* <Nav /> */}
      <Routes>
        <Route path="/" element={<Navigation />}>
          <Route index element={<Home />} />
          <Route path="chat" element={<Chat />} />
          <Route path="route" element={<R />} />
          <Route path="components" element={<ComponentSandbox />} />
          <Route path="game" element={<Game />} />

          <Route path="*" element={<NoMatch />} />
        </Route>
      </Routes>
      <HotToast />
    </PageWrapper>
  );
};

const PageWrapper = styled.div`
  height: 100vh;
  width: 100vw;
`;
export default App;
