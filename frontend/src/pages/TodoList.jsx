import React from "react";
// import TaskCard from './TaskCard';
import { LiaCommentSolid } from "react-icons/lia";
import { CiEdit } from "react-icons/ci";
import { AiOutlineDelete } from "react-icons/ai";
import { extractTime } from "../utils/extractTime";
import useDeleteTodo from "../hooks/useDeleteTodo";
import { useNavigate } from "react-router-dom";
import useGetOneTodo from "../hooks/useGetOneTodo";
import { PiClockCountdownFill } from "react-icons/pi";

const TodoList = ({ todo, status, priority }) => {
  console.log("--ToDo--", todo);
  const navigate = useNavigate();

  const { loading, deleteTodo } = useDeleteTodo();
  let topBorderColor = "";
  let getBorderColor = () => {
    if (status === "ToDo") {
      topBorderColor = "border-t-red-700";
    } else if (status === "In Progress") {
      topBorderColor = "border-t-blue-500";
    } else if (status === "In Review") {
      topBorderColor = "border-t-yellow-500";
    } else if(status === "Completed"){
      topBorderColor = "border-t-green-500";
    }
    return topBorderColor;
  };
  getBorderColor(status);

  const priorityColor = (priority) => {
    if (priority == "high") {
      return "bg-red-800";
    } else if (priority == "medium") {
      return "bg-red-300";
    } else {
      return "bg-red-100";
    }
  };


  const editTodo = (id) => {
    navigate("/update/" + id);
  };
  return (
    <div className={`p-5 bg-base-200 rounded-md border-t-8 ${topBorderColor}`}>
      <div className=" title text-xl font-medium m-2">{status}</div>
      <div className="content ">
        <div className="card shadow-xl self-center flex flex-col gap-4">
          {todo.length === 0 ? (
            <h1 className="text-center"> No Data</h1>
          ) : (
            todo.map((item) => {
              return (
                <div className="task  bg-slate-300 rounded-md p-4 text-slate-900">
                  <span
                    className={`${priorityColor(item.priority)} text-center py-1 px-4 rounded-lg  `}
                  >
                    {item.priority}
                  </span>
                  <p className="task-title text-xl my-2  p-2 ">{item.title}</p>
                  <p className="task-title  text-base my-2  p-2 ">
                    {item.description}
                  </p>

                  <div className="flex flex-row justify-between items-center">
                    <div className="text-xl flex flex-row justify-center gap-6">
                      <p className=" self-center">
                        <CiEdit
                          className=" cursor-pointer"
                          onClick={() => editTodo(item._id)}
                        />
                      </p>
                      <p className="self-center">
                        {loading ? (
                          <span className="loading loading-spinner"></span>
                        ) : (
                          <AiOutlineDelete
                            className=" cursor-pointer"
                            onClick={() => deleteTodo(item._id)}
                          />
                        )}
                      </p>
                    </div>
                    <div className="text-xl flex gap-4 items-center justify-end">
                      <PiClockCountdownFill />
                      <p className="text-lg self-center">
                        {new Date(item.dueDate).toDateString()}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })
          )}
        </div>
      </div>
    </div>
  );
};

export default TodoList;

//
