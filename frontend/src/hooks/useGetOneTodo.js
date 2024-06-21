import e from 'cors';
import React, { useState } from 'react'
import { toast } from 'react-toastify';

const useGetOneTodo = () => {
    const [item, setItem] = useState();
  const getOneTodo = async(id)=>{
    try {
        
        const res = await fetch(`http://localhost:3000/api/items/${id}`);
        const data = await res.json();
        if(res.ok){
            setItem(data.item)
        }
    } catch (error) {
        toast.error(error.message)
    }
    
  }
  return {item, getOneTodo}
}

export default useGetOneTodo
