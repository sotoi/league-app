import React,{useState,useEffect} from 'react'


function Champion({champion}) {
    let imgUrl=`http://ddragon.leagueoflegends.com/cdn/11.20.1/img/champion/${champion.image["full"]}`;
    
    return (
        <div>
            <p>{champion.name}</p>
            <img src={imgUrl}></img>
            <p>{champion.blurb}</p>
            <br></br>
        </div>
    )
}

export default Champion
