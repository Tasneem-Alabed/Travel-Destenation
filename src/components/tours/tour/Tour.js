import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import TourDetails from '../../TourDetails/TourDetails';
import { Link } from 'react-router-dom';
 

function Tour(props) {
    
   
   

    return (
        <>
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={props.img} />
                <Card.Body>
                    <Card.Title>{props.name}</Card.Title>

                </Card.Body>

               
                 


                <Card.Body>
                     <Button  as={Link} to={'../../TourDetails/TourDetails.js'} onClick={TourDetails} > Show More Details </Button>
              
                
                </Card.Body>
            </Card>
           
        </>
     
    )
    
    
}

export default Tour;

