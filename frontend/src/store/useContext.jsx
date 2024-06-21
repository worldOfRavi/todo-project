import { createContext, useContext, useEffect, useState } from "react";

export const authContext = createContext();

export const AuthContextProvider = ({children})=>{
    const [authUser, setAuthUser] = useState("");
    const [todoList, setTodoList] = useState({});

    const storeINLS = (token)=>{
        setAuthUser(token);
        localStorage.setItem('authToken', token);;
    }

       // function for handling logout functionality
    const logoutUser = ()=>{
        setAuthUser("")
        return localStorage.removeItem('authToken');
    }

    const getTodoList = async()=>{
        const res = await fetch("http://localhost:3000/api/items");
        const data = await res.json();
        setTodoList(data.items)
    }
    useEffect(()=>{
        getTodoList();
    },[])

    return(
        <authContext.Provider value={{authUser, setAuthUser, storeINLS,logoutUser,todoList}}>
            {children}
        </authContext.Provider>
    )
}

export const useAuthContext = ()=>{
    return useContext(authContext)
}