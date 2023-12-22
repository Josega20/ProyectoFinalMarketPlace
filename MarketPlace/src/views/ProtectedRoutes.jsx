/*import React from 'react'
import { Navigate, Outlet } from "react-router-dom";
import { useEffect, useState } from 'react';
export default function ProtectedRoute(){

    const[autenticated,setAutenticated]=useState(false);
    return autenticated ? <Outlet/> : <Navigate to="/"/>;
}*/

import React from 'react';
import { useEffect, useState } from 'react';
import { Navigate, Outlet } from 'react-router-dom';

export default function ProtectedRoute() {
  const [authenticated, setAuthenticated] = useState(false);


  return authenticated ? <Outlet /> : <Navigate to="/" />;}