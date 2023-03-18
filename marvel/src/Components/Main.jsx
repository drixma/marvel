import React from "react"
import { Card } from "./Card"
import axios from "axios"
import { useState, useEffect } from "react"

export const Main = () => {
  const [url,setUrl]=useState("http://gateway.marvel.com/v1/public/characters?ts=1&apikey=fca78091f60c52142e19755d172108a6&hash=462169bdd505ba5299336c663d11f6fa")
  const [item,setItem]=useState();
  const [ search, setSearch ] = useState( "" );


  useEffect(()=>{
      const fetch = async () => {
      const response = await axios.get(url)
      setItem(response.data.data.results);
    }
    fetch();
  },[url])
  
  const searchMarvel=()=>{
    setUrl(`https://gateway.marvel.com:443/v1/public/characters?nameStartsWith=${search}&ts=1&apikey=fca78091f60c52142e19755d172108a6&hash=462169bdd505ba5299336c663d11f6fa`)
  }

  return (
    <>
        <div className ="header">
            <div className ="bg">
                <img src ="./bg.png" alt ="" />
            </div>
            <div className ="search-bar">
                <img src="./logo.jpg" alt ="logo" />
                <input type ="search" placeholder ='Search Here'
                 className ='search'
                 onChange ={e =>setSearch(e.target.value)}
                 onKeyPress ={searchMarvel}/>
            </div>
        </div>
       <div className="content">
         
        {
          (!item)?<p>Not Found</p>:<Card data={item}/>
        }
       </div>
    </>
  )
}
