import { createContext, useReducer } from "react";
import localPostReducer from "./LocalPostReducer";

const dataInStorage = localStorage.getItem('localPostList')? JSON.parse(localStorage.getItem('localPostList')): [];

const initialState = {
    posts: dataInStorage
}

export const LocalPostContext = createContext(
    initialState
);


export const LocalPostContextProvider = ({ children }) => {

    const [state, dispatch] = useReducer(localPostReducer, initialState)

    const addPost = (post) => {
        dispatch({ type: "ADD_POST", payload: post });
    }

    const editPost = (post) => {
        dispatch({ type: "EDIT_POST", payload: post });
    }

    const deletePost = (id) => {
        dispatch({ type: "DELETE_POST", payload: id });
    }

    return <LocalPostContext.Provider value={{ ...state, addPost, deletePost, editPost }}>
        {children}
    </LocalPostContext.Provider>
}