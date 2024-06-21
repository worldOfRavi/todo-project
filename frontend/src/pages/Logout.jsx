import React, { useEffect, useState } from 'react'
import { useAuthContext } from '../store/useContext'
import { useNavigate } from 'react-router-dom';

const Logout = () => {
  const navigate = useNavigate();
  const {logoutUser} = useAuthContext();
  useEffect(()=>{
     logoutUser();
  },[logoutUser])
  return(
    navigate("/login")
  )

}

export default Logout
