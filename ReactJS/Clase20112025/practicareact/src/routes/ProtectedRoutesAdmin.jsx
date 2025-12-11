import React from 'react'
import { Navigate } from 'react-router-dom'

export default function ProtectedRoutesAdmin({children, authAdmin}) {
    if(authAdmin){
        return children
    }else{
        return(
            <Navigate to='/' />
        )
    }
  return (
    <div>ProtectedRoutesAdmin</div>
  )
}
