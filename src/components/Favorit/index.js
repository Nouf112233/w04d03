import React from 'react'
import { useHistory } from 'react-router-dom'


function Favorit() {
    const cards=JSON.parse(localStorage.getItem("SListItem"));

    const history = useHistory();
    
    const changeRoute = (id)=>{
        history.push(`/Card/${id}`);
    }
    const addLike = (id)=>{
        cards.favorit="Like";
     
  
        localStorage.setItem("SListItem",JSON.stringify(cards));
  
  
    }
    
    return (
        <div className="cards">
            {cards.map((item,i)=>{
                if(item.favorit==="unLike")
                {
                    return (
                        <div className="card" key={item.id}>
                            <h1>{item.city}</h1>
                            <h2>{item.country}</h2>
                            <img src={item.img} onClick={()=>changeRoute(item.id)} alt="img city" />
                            <button  onClick={()=>addLike(item.id)} id="like-${i}">{item.favorit}</button>
                            

                        </div>
                    )
                }
            })}
        </div>
    )
}
    
                

export default Favorit;
