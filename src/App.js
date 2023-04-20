 import Home from "./components/Home/Home";
import db from "./data/db.json"
 import './App.css';

function App() {
  return (
    <>
    <Home data={db}/>
    </>
  );
}

export default App;
