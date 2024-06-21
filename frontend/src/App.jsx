import React from "react";
import Navbar from "./components/Navbar";
import { Navigate, Route, Routes } from "react-router-dom";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Logout from "./pages/Logout";
import Home from "./pages/Home";
import { useAuthContext } from "./store/useContext";
import CreateTodo from "./pages/CreateTodo";
import UpdateTodo from "./pages/UpdateTodo";

const App = () => {
  const { authUser } = useAuthContext();

  return (
    <>
      <Navbar />
      <Routes>
        <Route
          path={"/"}
          element={authUser ? <Home /> : <Navigate to={"/login"} />}
        />
        <Route path={"/register"} element={<Register />} />
        <Route path={"/login"} element={<Login />} />
        <Route path={"/logout"} element={<Logout />} />
        <Route
          path={"/create"}
          element={authUser ? <CreateTodo /> : <Navigate to={"/login"} />}
        />
        <Route
          path={"/update/:id"}
          element={authUser ? <UpdateTodo /> : <Navigate to={"/login"} />}
        />
      </Routes>
    </>
  );
};

export default App;
