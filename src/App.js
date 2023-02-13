import { useState } from "react";
import Home from "./components/Home/Home";
import Aim from "./pages/Aim";

function App() {
  const [screen, setScreen] = useState(false);

  const start = () => setScreen(true);

  return (
    <div>
      {!screen && <Home start={start} />}
      {screen && <Aim />}
    </div>
  );
}

export default App;
