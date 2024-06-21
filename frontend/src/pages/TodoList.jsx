import React from "react";
// import TaskCard from './TaskCard';
import { LiaCommentSolid } from "react-icons/lia";
import { CiEdit } from "react-icons/ci";
import { AiOutlineDelete } from "react-icons/ai";
import { extractTime } from "../utils/extractTime";
import useDeleteTodo from "../hooks/useDeleteTodo";
import { useNavigate } from "react-router-dom";
import useGetOneTodo from "../hooks/useGetOneTodo";

const TodoList = ({ todo, status }) => {
  console.log("--ToDo--", todo);
  const navigate = useNavigate();

  const { loading, deleteTodo } = useDeleteTodo();
  let topBorderColor = "";
  let getBorderColor = () => {
    if (status === "Todo") {
      topBorderColor = "border-t-red-500";
    } else if (status === "In Progress") {
      topBorderColor = "border-t-blue-500";
    } else if (status === "In Review") {
      topBorderColor = "border-t-yellow-500";
    } else {
      topBorderColor = "border-t-green-500";
    }
    return topBorderColor;
  };
  getBorderColor(status);

  const editTodo = (id) => {
    navigate("/update/" + id);
  };
  return (
    <div className={`p-5 bg-base-200 rounded-md border-t-4 ${topBorderColor}`}>
      <div className=" title text-xl font-medium m-2">{status}</div>
      <div className="content ">
        <div className="card bg-base-100 shadow-xl self-center flex flex-col gap-4">
          {todo.length === 0 ? (
            <h1 className="text-center"> No Data</h1>
          ) : (
            todo.map((item) => {
              return (
                <div className="task  bg-slate-300 rounded-md p-4 text-slate-900">
                  <span className="bg-red-400 text-center py-1 px-4 rounded-lg  ">
                    {item.priority}
                  </span>
                  <p className="task-title text-xl my-2  p-2 ">{item.title}</p>
                  <p className="task-title  text-base my-2  p-2 ">
                    {item.description}
                  </p>

                  <div className="flex flex-row justify-between">
                    <div className="flex flex-row justify-start gap-6">
                      <p className="text-xl">
                        <CiEdit
                          className=" cursor-pointer"
                          onClick={() => editTodo(item._id)}
                        />
                      </p>
                      <p className="text-xl">
                        {loading ? (
                          <span className="loading loading-spinner"></span>
                        ) : (
                          <AiOutlineDelete
                            className=" cursor-pointer"
                            onClick={() => deleteTodo(item._id)}
                          />
                        )}
                      </p>
                      <p className="text-l">
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
