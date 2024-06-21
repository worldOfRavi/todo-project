import React, { useState } from 'react'
import { toast } from 'react-toastify';

const useUpdateTodo = () => {
  const [loading, setLoading]  = useState(false);
  try {
    setLoading(true);
    const updateTodo = async(input,id)=>{
        const res = await fetch(`http://localhost:3000/items/${id}`,{
            method:"PUT",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify(input)
        })
        const data = await res.json();
        if(res.ok){
            toast.success("Todo updated successfully");
        }
        
    }
    
  } catch (error) {
    toast.error(error.message)
  }
  finally{
    setLoading(false)
  }
  return {loading, updateTodo}
}

export default useUpdateTodo
