import { createContext, useReducer } from "react";
import { ACTION_TYPE } from "../utils/types";
import Reducer from "./Reducer";

const menu_names = ["Parent 1", "Parent 2", "Parent 3","Parent 4","Parent 5"];
const submenu_names = ["Child 1", "Child 2", "Child 3", "Child 4"];
const submenu_names2 = ["Child 5", "Child 6", "Child 7", "Child 8"];
const submenu_names3 = ["Child 9", "Child 10", "Child 11", "Child 12"];
const submenu_names4 = ["Child 9", "Child 10", "Child 11", "Child 12"];
const submenu_names5 = ["Child 9", "Child 10", "Child 11", "Child 12"];
const parent_submenu = [submenu_names, submenu_names2, submenu_names3, submenu_names4, submenu_names5];

const initialState = {
  parent: {},
  selectedSubMenu: "",
};

menu_names.map((menu_item) => {
  initialState.parent = {
    ...initialState.parent,
    [menu_item]: { isSelected: false, children: {} },
  };
});

parent_submenu.map((sub_menu, index) => {
  sub_menu.map((child) => {
    initialState.parent[Object.keys(initialState.parent)[index]].children = {
      ...initialState.parent[Object.keys(initialState.parent)[index]].children,
      [child]: false,
    };
  });
});

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
