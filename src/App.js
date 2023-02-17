import { useState } from "react";
import Home from "./components/Home/Home";
import PreAim from "./pages/PreAim";
import RegAim from "./pages/RegAim";

function App() {
  const [screen, setScreen] = useState(0);

  const regAim = () => setScreen(1);
  const preAim = () => setScreen(2);

  return (
    <div>
      {screen === 0 && <Home regAim={regAim} preAim={preAim} />}
      {screen === 1 && <RegAim />}
      {screen === 2 && <PreAim />}
    </div>
  );
}

export default App;
