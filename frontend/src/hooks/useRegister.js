import React, { useState } from 'react'
import { toast } from 'react-toastify';


const useRegister = () => {
  const [loading, setLaoding] = useState(false);
  
  const register = async({username, password})=>{
    setLaoding(true)
    try {
        const res = await fetch("http://localhost:3000/api/users/register",{
            method:"POST",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify({username, password})
        })
        const data = await res.json();
        if(data.error) throw new Error(data.error);
        if(res.ok){
            toast.success("Registration successfull");
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
  return {loading, register}
}

export default useRegister
