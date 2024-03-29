import React, {createContext, useReducer} from "react";
import AppReducer from "./AppReducer";

//initial state

const initialState = {
    transactions: []
}

//ctrate a global context

export const GlobalContext = createContext(initialState);

//provider comp

export const GlobalProvider = ({ children }) => {
    const [state, dispatch] = useReducer(AppReducer, initialState);

    //Actions

    function deleteTransaction(id){
        dispatch({
            type:'DELETE_TRANSACTION',
            payload:id
        })
    }

    function addTransaction(transaction){
        dispatch({
            type:'ADD_TRANSACTION',
            payload:transaction
        })
    }

    return(
        <GlobalContext.Provider value={{
            transactions: state.transactions,
            deleteTransaction, addTransaction
        }}>
            {children}
        </GlobalContext.Provider>
    )
}

