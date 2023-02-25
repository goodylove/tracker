import React, { useReducer, createContext } from "react";
import AppReducer from "./AppReducer";

const intialState = {
  transaction: [
    { id: 1, text: "flower", amount: -20 },
    { id: 2, text: "malt", amount: +300 },
    { id: 3, text: "clothes", amount: -10 },
    { id: 4, text: "cash", amount: +150 },
  ],
};
export const GlobalContext = createContext(intialState);

const GlobalContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, intialState);
  return (
    <GlobalContext.Provider
      value={{
        transaction: state.transaction,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export default GlobalContextProvider;
