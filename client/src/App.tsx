import './App.css';

import { Home, My, R } from './api/Api';
import { HotToast } from './components/HotToast';

function App() {
  return (
    <div>
      {/* <Nav /> */}
      <Home />
      <R />
      <My />
      <HotToast />
    </div>
  );
}

export default App;
