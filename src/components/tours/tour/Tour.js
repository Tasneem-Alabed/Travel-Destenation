// import Card from 'react-bootstrap/Card';
// import Button from 'react-bootstrap/Button';
import TourDetails from '../../TourDetails/TourDetails';
// import { Link } from 'react-router-dom';
 

function Tour(props) {
  return (
        <>
         <h2> {props.name}</h2> 
         <img src={props.image} alt={props.name}/> 
<TourDetails data={props}/>
           
        </>
     
    )
    
    
}

export default Tour;

