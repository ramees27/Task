import React, { useContext, useEffect, useState } from 'react'
import { createContext } from 'react'
import axios from "axios"




export const newContext=createContext()

const Contex = ({children}) => {
    const [state,setState]=useState([])

    useEffect(()=>{
        axios.get("https://jsonplaceholder.typicode.com/posts")
        .then(responce=>setState(responce.data.slice(0,10)))
        .catch(error=>console.log("error",error))
    })


  return (
  <newContext.Provider value={{state}}>
    {children}
  </newContext.Provider>
  )
}

export default Contex