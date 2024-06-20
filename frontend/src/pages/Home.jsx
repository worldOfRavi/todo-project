import React from 'react';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/create');
  };

  return (
    <>
      <button className="btn btn-active" onClick={handleClick}>Create Todo</button>
    </>
  );
};

export default Home;
