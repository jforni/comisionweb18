import React from 'react';
import { Navigate } from 'react-router-dom';

export default function ProtectedRoutes({children, auth}) {
    /* const auth = true */

    if(auth){
        return children
    }else {
        return (
            <Navigate to="/" />
        )
    }

    return (
        <div>ProtectedRoutes</div>
    )
}
