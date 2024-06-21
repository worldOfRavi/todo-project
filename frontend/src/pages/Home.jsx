import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuthContext } from '../store/useContext';
import TodoList from './TodoList';
import { IoIosAddCircleOutline } from "react-icons/io";


const Home = () => {

  const navigate = useNavigate();
  const {todoList} = useAuthContext();


  const handleClick = () => {
    navigate('/create');
  };

  return (
    <>
      <button className="btn btn-active" onClick={handleClick}>Create Todo</button>
      {/* {todoList.length ===0 && <h1>You haven't created any todo list yet.</h1>} */}
      <div className="w-[85%] bg-[url('https://images.pexels.com/photos/998641/pexels-photo-998641.jpeg')] bg-cover bg-center overflow-y-scroll ">
      <div className="p-4 flex flex-row justify-between items-center">
        <h1 className="text-white p-10 block  text-3xl"> Task Board</h1> 
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
      <div className="taskboard p-10 pt-0 flex flex-row justify-start gap-3 flex-wrap">
      {/* card goes here */}

      {
        todoList.map((todo, idx)=>
          <TodoList key={idx}  todo={todo}/>
        )
      }
      
      
      </div>
      </div>
      {/* <TodoList /> */}
    </>
  );
};

export default Home;
