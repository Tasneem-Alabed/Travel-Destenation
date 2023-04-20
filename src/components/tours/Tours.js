function Tours(props){

// console.log(props.data.data)
    return(
  <>
 
{props.data.data.map((meme)=>{
    return(
        <div key={meme.id}>
            <h3>{meme.name}</h3>
            <img src={meme.image} alt={meme.name}></img>
            
        </div>
    )
})}
</>  

);
}

export default Tours;