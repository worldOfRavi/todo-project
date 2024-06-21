import  { useState } from "react";
import { toast } from "react-toastify";

const useUpdateTodo = () => {
  const [loading, setLoading] = useState(false);

  const updateTodo = async (input, id) => {
    setLoading(true);
    try {
      const res = await fetch(`http://localhost:3000/api/items/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(input),
      });
      const data = await res.json();
      console.log(data);
      if (res.ok) {
        toast.success("Todo updated successfully");
      }
    } catch (error) {
      toast.error(error.message);
    } finally {
      setLoading(false);
    }
  };
  return { loading, updateTodo };
};

export default useUpdateTodo;