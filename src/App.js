 import Home from "./components/Home/Home";
import db from "./data/db.json"
 import './App.css';
 import 'bootstrap/dist/css/bootstrap.min.css';
 import { Routes, Route } from 'react-router-dom';
 import TourDetails from  "./components/TourDetails/TourDetails.js"
function App() {
  return (
    <>
    
   
    <div>
    <Routes>
        
        <Route path="/" element={<Home data={db}/>}></Route>
       
        <Route path={"/city/:id"} element={<TourDetails data={db} />}></Route>
    </Routes>
    
</div>
    </>
  );
  }
 

export default App;
