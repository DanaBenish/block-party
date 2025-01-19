import react from "react";
import './App.css';
import CheckeredPattern from "./components/CheckeredPattern";
import Refresh from "./components/Refresh";

function App() {
  return (
    <div>
      <div><Refresh /></div>
      <h1></h1>
      <CheckeredPattern /> {/* Pass the grid size as a prop */}
    </div>
  );
}

export default App;
