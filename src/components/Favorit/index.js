import React from 'react'
import { useHistory } from 'react-router-dom'


function Favorit() {
    const cards=JSON.parse(localStorage.getItem("SListItem"));
    const favoritCards=cards.filter(item=>(item.favorit))

    const history = useHistory();

    const changeRoute = (id)=>{
        history.push(`/Card/${id}`);
    }
    const addLike = (id,i)=>{
        cards[id].favorit=!cards[id].favorit;
        if(!cards[id].favorit){
            cards[id].liking="like" 
            favoritCards.splice(i,1);
        }else{
            cards[id].liking="unlike";
        }
        
      
      localStorage.setItem("SListItem",JSON.stringify(cards));


  }
        
        
    return (
        <div className="cards">
            {favoritCards.map((item,i)=>
            <div className="card"  key={item.id}>
                <h1>{item.city}</h1>
                <h2>{item.country}</h2>
                <img src={item.img} onClick={()=>changeRoute(item.id)} alt="img city" />
                <button  onClick={()=>addLike(item.id,i)} >{item.liking}</button>
                </div>)}
        </div>
    )
}
    
                

export default Favorit;
