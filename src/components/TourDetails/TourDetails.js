 import { useState } from "react";
 import { useParams } from "react-router-dom";

 const data =require("../../data/db.json");
function  TourDetails(){
    const {id}=useParams();
   const [view , setView]=useState(false);

    return(
        <>
        {
            data.map((element)=>{
                if(element.id == id){
                    return(
                        <div>
                            <h2>{element.name}</h2>
                            <img src={element.image} alt={element.name}/>
                            <p>{element.price}</p>
                            <div>
                                {
                                    view?<>
                                    <p>{(element.info).substring(0,100)}</p>
                                    <button onClick={()=>setView(false)}> Show more</button>
                                    </>
                                    :
                                    <>
                                    <p>{(element.info).substring(0,200)}</p>
                                    <button onClick={()=>setView(true)}>Show less</button>
                                    </>
                                }
                            </div>
                        </div>
                    )
                }
            })
        }
        </>
    )
}




export default  TourDetails;