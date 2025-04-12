import React, { createContext, useReducer } from 'react';

// Initial state
const initialState = {
  transactions: []
};

// Create context
export const GlobalContext = createContext(initialState);

// Reducer
const AppReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_TRANSACTION':
      return {
        ...state,
        transactions: [action.payload, ...state.transactions]
      };
    default:
      return state;
  }
};

// GlobalProvider component
export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  // Actions
  const addTransaction = transaction => {
    dispatch({
      type: 'ADD_TRANSACTION',
      payload: transaction
    });
  };

  return (
    <GlobalContext.Provider value={{
      transactions: state.transactions,
      addTransaction
    }}>
      {children}
    </GlobalContext.Provider>
  );
};

