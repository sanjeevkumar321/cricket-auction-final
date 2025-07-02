import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import LiveAuction from "./LiveAuction";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <LiveAuction />
    </>
  );
}

export default App;
