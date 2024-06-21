import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuthContext } from '../store/useContext';
import TodoList from './TodoList';

const Home = () => {

  const navigate = useNavigate();
  const {todoList} = useAuthContext();
  console.log(todoList);



  const handleClick = () => {
    navigate('/create');
  };

  return (
    <>
      <button className="btn btn-active" onClick={handleClick}>Create Todo</button>
      {/* {todoList.length ===0 && <h1>You haven't created any todo list yet.</h1>} */}
      <TodoList />
    </>
  );
};

export default Home;
