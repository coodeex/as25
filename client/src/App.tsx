import './App.css';

import { Route, Routes } from 'react-router-dom';

import { Home, R } from './api/Api';
import { ComponentSandbox } from './components/common/ComponentSandbox';
import { NoMatch } from './components/common/NoMatch';
import { HotToast } from './components/HotToast';
import { Navigation } from './components/nav/Navigation';
import { Chat } from './components/telegram/Chat';

const App = () => {
  return (
    <div>
      {/* <Nav /> */}
      <Routes>
        <Route path="/" element={<Navigation />}>
          <Route index element={<Home />} />
          <Route path="chat" element={<Chat />} />
          <Route path="route" element={<R />} />
          <Route path="components" element={<ComponentSandbox />} />

          <Route path="*" element={<NoMatch />} />
        </Route>
      </Routes>
      <HotToast />
    </div>
  );
};

export default App;
