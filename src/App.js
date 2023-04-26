 import Home from "./components/Home/Home";
import db from "./data/db.json"
 import './App.css';
 import 'bootstrap/dist/css/bootstrap.min.css';
 import { Routes, Route } from 'react-router-dom';
 import TourDetails from  "./components/TourDetails/TourDetails.js"
function App() {
  return (
    <>
    
    <Home data={db}/>
    
    Rout();

    </>
  );

  function Rout(){
    <Routes>
        
        <Route path="/" element={<Home />}></Route>
       
        <Route path="../../TourDetails/TourDetails.js" element={<TourDetails />}></Route>
    </Routes>
  }
}

export default App;
