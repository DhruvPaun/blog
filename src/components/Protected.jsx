import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
function Protected({children,authentication=true}) {
    const [loader,setLoader]=useState(true)
    const navigate=useNavigate()
    const authStatus=useSelector(state=>state.isLoggedIn)
    useEffect(()=>{
     if(authentication !== authStatus)
     {
        authentication ? navigate("/login"): navigate("/") 
     }
    setLoader(false)
    },[authentication,authStatus,loader])
    
  return loader ? <div>Loading</div> : <div>{children}</div>
}

export default Protected