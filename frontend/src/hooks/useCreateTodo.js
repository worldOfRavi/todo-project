
import React, { useState } from 'react'
import { toast } from 'react-toastify';
import { useAuthContext } from '../store/useContext';


const useCreateTodo = () => {
    const {getTodoList} = useAuthContext();
  const [loading, setLaoding] = useState(false);
  
  const create = async(input)=>{
    console.log(input);
    setLaoding(true)
    try {
        const res = await fetch("http://localhost:3000/api/items",{
            method:"POST",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify(input)
        })
        const data = await res.json();
        if(data.error) throw new Error(data.error);
        if(res.ok){
            getTodoList();
            toast.success("Todo creation successful");
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
  return {loading, create}
}


export default useCreateTodo
