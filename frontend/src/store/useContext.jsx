import { createContext, useContext, useEffect, useState } from "react";

export const authContext = createContext();

export const AuthContextProvider = ({children})=>{
    const [authUser, setAuthUser] = useState("");
    const [todoList, setTodoList] = useState([]);

    const storeINLS = (token)=>{
        setAuthUser(token);
        localStorage.setItem('authToken', token);;
    }

       // function for handling logout functionality
    const logoutUser = ()=>{
        setAuthUser("")
        return localStorage.removeItem('authToken');
    }

    return(
        <authContext.Provider value={{authUser, setAuthUser, storeINLS,logoutUser,setTodoList,todoList}}>
            {children}
        </authContext.Provider>
    )
}

export const useAuthContext = ()=>{
    return useContext(authContext)
}