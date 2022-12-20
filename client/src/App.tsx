import './App.css';

import { My, R } from './api/Api';
import { HotToast } from './components/HotToast';

function App() {
  return (
    <div>
      {/* <Nav /> */}
      <R />
      <My />
      <HotToast />
    </div>
  );
}

export default App;
