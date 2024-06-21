import { useNavigate } from "react-router-dom";
import { useAuthContext } from "../store/useContext";
import TodoList from "./TodoList";
import { IoIosAddCircleOutline } from "react-icons/io";
import { useEffect } from "react";

const Home = () => {
  const navigate = useNavigate();
  const { todoList, getTodoList } = useAuthContext();
  useEffect(()=>{
    getTodoList();
  },[])
  const handleClick = () => {
    navigate("/create");
  };

  return (
    <div className="mx-10">
      <h1 className="block  text-3xl text-black my-6"> Task Board</h1>
      {/* {todoList.length ===0 && <h1>You haven't created any todo list yet.</h1>} */}
      <div className="w-full h-[83vh] bg-[url('https://images.pexels.com/photos/998641/pexels-photo-998641.jpeg')] bg-cover bg-center overflow-y-scroll ">
        <div className="p-4 flex flex-row justify-between items-center">
          <button className="btn btn-active" onClick={handleClick}>
            Create Todo
          </button>
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

        <div className="taskboard p-10 pt-0 flex flex-row justify-start gap-3 flex-wrap w-full">
          <div className="flex-1">
            <TodoList
              todo={todoList.filter((list) => list?.status === "Todo")}
              status="ToDo"
              priority={todoList.priority}
            />
          </div>
          <div className="flex-1">
            <TodoList
              todo={todoList.filter((list) => list?.status === "In Progress")}
              status="In Progress"
              priority={todoList.priority}
            />
          </div>
          <div className="flex-1">
            <TodoList
              todo={todoList.filter((list) => list?.status === "In Review")}
              status="In Review"
              priority={todoList.priority}
            />
          </div>
          <div className="flex-1">
            <TodoList
              todo={todoList.filter((list) => list?.status === "Completed")}
              status="Completed"
              priority={todoList.priority}
            />
          </div>
        </div>
      </div>
      {/* <TodoList /> */}
    </div>
  );
};

export default Home;
