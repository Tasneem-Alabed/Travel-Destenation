import Tour from "./tour/Tour.js"
import { Link } from "react-router-dom";
function Tours(props){

console.log(props.data.data)
    return(
  <>
 
{props.data.data.map((meme)=>{
    return(
     <div key={meme.id}>
      <Link to={`/city/${meme.id}`}>
      <Tour name={meme.name} image={meme.image} />
     
      </Link>
     </div>
     
    )
})}
</>  

);
}

export default Tours;