import './App.css';

import { Route, Routes } from 'react-router-dom';
import styled from 'styled-components';

import { ComponentSandbox } from './components/common/ComponentSandbox';
import { NoMatch } from './components/common/NoMatch';
import { Game } from './components/game/Game';
import { HotToast } from './components/HotToast';
import { Navigation } from './components/nav/Navigation';
import { Chat } from './components/telegram/Chat';
import Colors from './pages/Colors';
import Home from './pages/Home';
import Timeline from './pages/Timeline';
import Stimulaatio from './pages/Stimulaatio';
import Info from './pages/Info';
import { useState } from 'react';

const App = () => {
  const [language, setLanguage] = useState('FI');

  return (
    <PageWrapper>
      {/* <Nav /> */}
      <Routes>
        <Route path="/" element={<Navigation />}>
          <Route index element={<Home />} />
          <Route path="colors" element={<Colors />} />
          <Route path="timeline" element={<Timeline />} />
          <Route path="stimulaatio" element={<Stimulaatio />} />
          <Route path="info" element={<Info />} />
          {/* <Route path="chat" element={<Chat />} /> */}
          {/* <Route path="components" element={<ComponentSandbox />} /> */}
          {/* <Route path="game" element={<Game />} /> */}

          <Route path="*" element={<NoMatch />} />
        </Route>
      </Routes>
      <HotToast />
    </PageWrapper>
  );
};

const PageWrapper = styled.div`
  background-color: ${p => p.theme.colors.background};
  min-height: 100vh;
  width: 100vw;
  min-width: 250px;
`;
export default App;
