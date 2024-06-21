import React from 'react'
// import TaskCard from "./TaskCard";
import { IoIosAddCircleOutline } from "react-icons/io";
import TaskCard from './TaskCard';

  const TodoList=()=> {
  return (
    <div className="w-[85%] bg-[url('https://images.pexels.com/photos/998641/pexels-photo-998641.jpeg')] bg-cover bg-center overflow-y-scroll ">
      <div className="p-4 flex flex-row justify-between items-center">
        <h1 className="text-white p-10  text-3xl"> Task Board</h1>
        <div className="available-users self-center">
          <div className="btn btn-ghost btn-circle avatar">
            <div className="w-8 rounded-full">
              <img
                alt="Tailwind CSS Navbar component"
                src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
              />
            </div>
          </div>
          <div className="btn btn-ghost btn-circle avatar">
            <div className="w-8 rounded-full">
              <img
                alt="Tailwind CSS Navbar component"
                src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
              />
            </div>
          </div>
          <div className="btn btn-ghost btn-circle avatar">
            <div className="w-8 rounded-full">
              <img
                alt="Tailwind CSS Navbar component"
                src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
              />
            </div>
          </div>
          <button className="text-3xl text-gray-500 hover:text-slate-950 ">
            <IoIosAddCircleOutline />
          </button>{" "}
        </div>
      </div>
      <div className="taskboard p-10 pt-0 flex flex-row justify-evenly gap-3 flex-wrap">
        {/*  */}
        <div className=" p-5 bg-base-200 w-[23%] rounded-md border-t-4 border-t-red-500">
          <div className=" title text-xl font-medium m-2">Backlog</div>
          <div className="content ">
            <TaskCard />
          </div>
          <div className="add-new-task flex flex-row gap-5 justify-center mt-8 items-center ">
            <button className="text-3xl text-gray-500 hover:text-slate-950 ">
              <IoIosAddCircleOutline />
            </button>{" "}
            <span className="text-sm self-center">Add New Task</span>
          </div>
        </div>

        {/*  */}
        <div className=" p-5 bg-base-200 w-[23%] rounded-md border-t-4 border-t-blue-500">
          {" "}
          <div className="title text-xl font-medium m-2">In Progress</div>
          <div className="content">
            <TaskCard />
          </div>
          <div className="add-new-task flex flex-row gap-5 justify-center mt-8 items-center ">
            <button className="text-3xl text-gray-500 hover:text-slate-950 ">
              <IoIosAddCircleOutline />
            </button>{" "}
            <span className="text-sm self-center">Add New Task</span>
          </div>
        </div>

        {/*  */}
        <div className=" p-5 bg-base-200 w-[23%] rounded-md border-t-4 border-t-yellow-500">
          {" "}
          <div className="title text-xl font-medium m-2">In Review</div>
          <div className="content">
            {/* <TaskCard /> */}
          </div>
          <div className="add-new-task flex flex-row gap-5 justify-center mt-8 items-center ">
            <button className="text-3xl text-gray-500 hover:text-slate-950">
              <IoIosAddCircleOutline />
            </button>{" "}
            <span className="text-sm self-center">Add New Task</span>
          </div>
        </div>

        {/*  */}
        <div className=" p-5 bg-base-200 w-[23%] rounded-md border-t-4 border-t-green-500">
          {" "}
          <div className="title text-xl font-medium m-2">Complete</div>
          <div className="content">
            {/* <TaskCard /> */}
          </div>
          <div className="add-new-task flex flex-row gap-5 justify-center mt-8 items-center ">
            <button className="text-3xl text-gray-500 hover:text-slate-950">
              <IoIosAddCircleOutline />
            </button>{" "}
            <span className="text-sm self-center">Add New Task</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TodoList