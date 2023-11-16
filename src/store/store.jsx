import { createContext, useReducer } from "react";
import { ACTION_TYPE } from "../utils/types";
import Reducer from "./Reducer";
import initialStore from "./initialStore.json";

const initialState = { ...initialStore };

export const GlobalContext = createContext(initialState);

export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(Reducer, initialState);

  const handleParentClick = (menu_name) => {
    dispatch({ type: ACTION_TYPE.PARENT_CLICK, payload: menu_name });
  };

  const handleChildClick = (submenu_name) => {
    dispatch({ type: ACTION_TYPE.CHILD_CLICK, payload: submenu_name });
  };

  return (
    <GlobalContext.Provider
      value={{
        parent: state.parent,
        selectedSubMenu: state.selectedSubMenu,
        handleParentClick,
        handleChildClick,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
