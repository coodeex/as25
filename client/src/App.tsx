import './App.css';

import { Home, My, R } from './api/Api';
import { HotToast } from './components/HotToast';
import { Chat } from './components/telegram/Chat';

function App() {
  return (
    <div>
      {/* <Nav /> */}
      <Home />
      <R />
      <My />
      <HotToast />
      <Chat />
    </div>
  );
}

export default App;
