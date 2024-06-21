import { createContext, useContext, useEffect, useState } from "react";

export const AuthContext = createContext();

export const AuthContextProvider = ({children}) => {
    const [authUser, setAuthUser] = useState(localStorage.getItem('auth') || "");
    const [todoList, setTodoList] = useState([]);
    const [isLoggedIn, setIsLoggedIn] = useState(!!authUser);

    const storeINLS = (id) => {
        setAuthUser(id);
        localStorage.setItem('auth', id);
        setIsLoggedIn(true);
    };

    const logoutUser = () => {
        setAuthUser("");
        localStorage.removeItem('auth');
        setIsLoggedIn(false);
    };

    const getTodoList = async () => {
        try {
            const res = await fetch("http://localhost:3000/api/items");
            const data = await res.json();
            setTodoList(data.items);
        } catch (error) {
            console.error("Failed to fetch todo list", error);
        }
    };

    useEffect(() => {
        getTodoList();
    }, []);

    return (
        <AuthContext.Provider value={{ authUser, setAuthUser, storeINLS, logoutUser, todoList, getTodoList, isLoggedIn, setIsLoggedIn }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuthContext = () => {
    return useContext(AuthContext);
};
