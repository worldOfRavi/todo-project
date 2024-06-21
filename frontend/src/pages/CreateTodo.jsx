import React, { useState } from "react";
import useCreateTodo from "../hooks/useCreateTodo";
import { useNavigate } from "react-router-dom";

const CreateTodo = () => {
  const navigate =  useNavigate();

   const {loading, create} =  useCreateTodo();
  const [input, setInput] = useState({
    title: "",
    description: "",
    priority: "",
    dueDate: "",
    status: "",
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
    <div className="create-container">
      <h1 className="text-gray-700">Create todo</h1>
      <form onSubmit={handleSubmit}>
        <label className="form-control w-full max-w-xs">
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
          <option value="todo">Todo</option>
          <option value="on-going">On going</option>
          <option value="completed">Completed</option>
        </select>
        <br />
        <button type="submit" className="btn">
          {loading ? <span className="loading loading-spinner"></span> : "Create" }
        </button>
      </form>
    </div>
  );
};

export default CreateTodo;
