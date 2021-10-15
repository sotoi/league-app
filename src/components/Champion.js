import React,{useState,useEffect} from 'react'
import "./Champion.css"

function Champion({champion}) {
    let imgUrl=`http://ddragon.leagueoflegends.com/cdn/img/champion/loading/${champion.id}_0.jpg`;
    let portraitUrl=`http://ddragon.leagueoflegends.com/cdn/11.20.1/img/champion/${champion.image["full"]}`
    
    return (
        <div className="flip-card">
  <div className="flip-card-inner">
    <div className="flip-card-front">
      <img className="champion-image" src={imgUrl} alt="Champion"/>
    </div>
    <div className="flip-card-back">
      <img className="champion-portrait" src={portraitUrl}/>
    <h1 className="champion-name">{champion.name}</h1>
    <h2 className="champion-title">{champion.title}</h2>
    <p className= "champion-blurb">{champion.blurb}</p>
    </div>
  </div>
</div>
       /* <div className="top">
        <div className = "champion-container">
            <div className="champion-description">
            <img className ="champion-image" src={imgUrl}></img>
            <div className="champion-label">
            <p className="champion-name">{champion.name}</p>
            <p className="champion-title">{champion.title}</p>
            </div>
            </div>
            <div className="champion-data">
            
            <p className= "champion-blurb">{champion.blurb}</p>

            </div>
            
        </div>
        </div> */
        
    )
}

export default Champion
