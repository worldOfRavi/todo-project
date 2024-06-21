import React, { useState } from 'react'
import { toast } from 'react-toastify';
import { useAuthContext } from '../store/useContext';


const useLogin = () => {
    const {authUser, setAuthUser,storeINLS} = useAuthContext();
  const [loading, setLaoding] = useState(false);
  
  const login = async({username, password})=>{
    setLaoding(true)
    try {
        const res = await fetch("http://localhost:3000/api/users/login",{
            method:"POST",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify({username, password})
        })
        const data = await res.json();
        // console.log(data);
        storeINLS(data.id);
        if(data.error) throw new Error(data.error);
        if(res.ok){
            toast.success("Login successfull"); 
        }
        else{
            toast.error(data.message)
        }

    } catch (error) {
        toast.error(error.message);
    }finally{
        setLaoding(false)
    }
  }
  return {loading, login}
}

export default useLogin
