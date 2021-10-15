import React, {useState,useEffect} from 'react'
import axios from "../helpers/axios"
import Champion from './Champion.js';
import "./Champinfo.css"


function Champinfo() {
    const[championData, setChampionData]=useState(null);
    const[championName,setChampionName]=useState("");
    useEffect(() => {
        async function fetchData() {
          let req = await axios.get("data/en_US/champion.json");
         
          

         setChampionData(req.data.data);
         console.log(req.data.data)
         
         }
        fetchData();
      }, [])
    
      
    
    
 
      
    
  
    

  if(championData!=null){
    return (
    <div className="champion-body">
        <div className="cards">
          { Object.keys(championData).map((champion)=>{
        
        return <Champion key={champion} champion={championData[champion]}/>
     })}
         
        </div>
        </div>
    )} else{
    return(<div>Loading...</div>)
    }
    
        }

export default Champinfo
