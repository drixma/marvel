import React from 'react'
import {useParams} from 'react-router-dom'
import axios from 'axios';
import { useState, useEffect } from "react"
export const Marvel = () => {
  const {id}=useParams();
  const [item,setItem]=useState()
  useEffect(()=>{
  const fetch=async()=>{
    const res=await axios.get(`https://gateway.marvel.com:443/v1/public/characters/${id}?ts=1&apikey=fca78091f60c52142e19755d172108a6&hash=462169bdd505ba5299336c663d11f6fa`)
    setItem(res.data.data.results[0])
  }
  fetch();
},[id])


  return (

    <>
    {
      (!item)? "":(
        <div className="box-content">
          <div className="right-box">
          <img src={`${item.thumbnail.path}.${item.thumbnail.extension}`} alt="" />
          </div>
          <div className="left-box">
            <h1>{item.name}</h1>
            <h4>{item.description}</h4>
          </div>
        </div>
      )
    }
    </>
  )
}
