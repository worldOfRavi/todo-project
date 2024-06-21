import React, { useEffect, useState } from "react";
import useCreateTodo from "../hooks/useCreateTodo";
import { useNavigate, useParams } from "react-router-dom";
import useGetOneTodo from "../hooks/useGetOneTodo";
import useUpdateTodo from "../hooks/useUpdateTodo";

const UpdateTodo = () => {
 const {loading, UpdateTodo} =  useUpdateTodo();
    const {id} = useParams();
    const {item,getOneTodo} = useGetOneTodo();

    console.log(item);
    useEffect(()=>{
        getOneTodo(id);
    },[])
  const navigate =  useNavigate();

  const [input, setInput] = useState({
    title: item.title,
    description: item.description,
    priority: item.priority,
    dueDate: item.dueDate,
    status: item.status,
  });

  // function to handle the input change
  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setInput({
      ...input,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    create(input);
    navigate("/");

  };

  return (
    <>
      <h1 className="text-gray-700 text-3xl text-center mt-10">Update Task</h1>
    <div className="create-container w-[80%] lg:max-w-[40%] md:max-w-[60%] sm:w-[50%] rounded-md border-2 shadow-sm r mx-auto mt-[4vh] p-2">
      <form className="flex flex-col gap-4 flex-wrap p-8 justify-center w-[100%] items-center" onSubmit={handleSubmit}>
        <label className="form-control w-full max-w-xs ">
          <div className="label">
            <span className="label-text">Title</span>
          </div>
          <input
            type="text"
            name="title"
            className="input input-bordered w-full max-w-xs"
            value={input.title}
            onChange={handleChange}
          />
        </label>

        <label className="form-control w-full max-w-xs">
          <div className="label">
            <span className="label-text">Description</span>
          </div>
          <input
            type="text"
            name="description"
            className="input input-bordered w-full max-w-xs"
            value={input.description}
            onChange={handleChange}
          />
        </label>

        <label htmlFor="priority-select" className="form-control w-full max-w-xs">
          Priority:
        </label>
        <select
          id="priority-select"
          name="priority"
          className="input input-bordered w-full max-w-xs"
          value={input.priority}
          onChange={handleChange}
          required
        >
          <option value="">Select an option</option>
          <option value="high">High</option>
          <option value="medium">Medium</option>
          <option value="low">Low</option>
        </select>

        <label className="form-control w-full max-w-xs">
          <div className="label">
            <span className="label-text">Due Date</span>
          </div>
          <input
            type="date"
            name="dueDate"
            className="input input-bordered w-full max-w-xs"
            value={input.dueDate}
            onChange={handleChange}
          />
        </label>

        <label htmlFor="status-select" className="form-control w-full max-w-xs">
          Status:
        </label>
        <select
          id="status-select"
          name="status"
          className="input input-bordered w-full max-w-xs"
          value={input.status}
          onChange={handleChange}
          required
        >
          <option value="">Select an option</option>
          <option value="Todo">Todo</option>
          <option value="In Progress">On going</option>
          <option value="In Review">In Review</option>
          <option value="Completed">Completed</option>
        </select>
        <br />
        <button type="submit" className="btn w-full max-w-xs">
          update
        </button>
      </form>
    </div>
    </>
  );
};




export default UpdateTodo
