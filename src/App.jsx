import "./App.css";
import Navbar from "./components/Navbar";

function App() {
  const monTitre = "Hello react";
  return (
    <div className="App">
      <h1>{monTitre.toUpperCase()}</h1>
      <Navbar />
    </div>
  );
}

export default App;
