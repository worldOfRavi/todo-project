import React from "react";
// import TaskCard from './TaskCard';
import { LiaCommentSolid } from "react-icons/lia";
import { CiEdit } from "react-icons/ci";
import { AiOutlineDelete } from "react-icons/ai";
import { extractTime } from "../utils/extractTime";
import useDeleteTodo from "../hooks/useDeleteTodo";
import { useNavigate } from "react-router-dom";
import useGetOneTodo from "../hooks/useGetOneTodo";

const TodoList = ({ todo }) => {
  const navigate = useNavigate();
  const { _id, title, description, priority, status, createdAt } = todo;

  const {loading, deleteTodo} = useDeleteTodo();
  const formatTime = extractTime(createdAt);
  let topBorderColor = "";
  let getBorderColor = (status) => {
    if (status == "Todo") {
      topBorderColor = "border-t-red-500";
    } else if (status == "In Progress") {
      topBorderColor = "border-t-blue-500";
    } else if (status == "In Review") {
      topBorderColor = "border-t-yellow-500";
    } else {
      topBorderColor = "border-t-green-500";
    }
    return topBorderColor;
  };
  getBorderColor(status);

  const  editTodo = (id)=>{
    navigate("/update/"+id);
  }
  return (
    <div
      className={`p-5 bg-base-200 w-[23%] rounded-md border-t-4 ${topBorderColor}`}
    >
      <div className=" title text-xl font-medium m-2">{status}</div>
      <div className="content ">
        {/* item start */}
        <div className="card bg-base-100 shadow-xl self-center">
          <div className=" task  bg-slate-300 rounded-md p-4 text-slate-900">
            <span className="bg-red-400 text-center py-1 px-4 rounded-lg  ">
              Priority({priority})
            </span>
            <p className="task-title text-xl text-base my-2  p-2 ">{title}</p>
            <p className="task-title  text-base my-2  p-2 ">{description}</p>

            <div className="flex flex-row justify-between">
              <div className="flex flex-row justify-start gap-6">
                <p className="text-xl">
                  <CiEdit className=" cursor-pointer" onClick={()=>editTodo(_id)} />
                </p>
                <p className="text-xl">
                  {loading ? <span className="loading loading-spinner"></span> : <AiOutlineDelete className=" cursor-pointer"  onClick={()=>deleteTodo(_id)}/> }
                </p>
                <p className="text-l">{formatTime}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TodoList;

// 