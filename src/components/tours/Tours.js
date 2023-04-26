import Tour from "./tour/Tour.js"

function Tours(props){

// console.log(props.data.data)
    return(
  <>
 
{props.data.data.map((meme)=>{
    return(
     <Tour name={meme.name}  info={meme.info}  img={meme.image}
     price ={meme.price} key={meme.id} />
     
    )
})}
</>  

);
}

export default Tours;