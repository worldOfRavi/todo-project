import React, { useState } from 'react'
import { toast } from 'react-toastify';
import { useAuthContext } from '../store/useContext';

const useDeleteTodo = () => {
    const {getTodoList} = useAuthContext();
  const [loading, setLaoding] = useState(false);
  const deleteTodo = async(id)=>{
    console.log(id);
    setLaoding(true)
    try {
        const res = await fetch(`http://localhost:3000/api/items/${id}`,{
            method:"DELETE"
        });
        const data = await res.json();
        if(data.error) throw new Error(data.error)
        if(res.ok){
            getTodoList();
            toast.success("Tesk deletion successful");
        }
    } catch (error) {
        toast.error(error.message)
    }finally{
        setLaoding(false);
    }

  }
  return {loading, deleteTodo}
}

export default useDeleteTodo
