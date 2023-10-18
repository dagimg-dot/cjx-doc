import { createContext, useReducer } from "react";
import { ACTION_TYPE } from "../utils/types";
import Reducer from "./Reducer";

// const menu_names = [
//   "Parent 1",
//   "Parent 2",
//   "Parent 3",
//   "Parent 4",
//   "Parent 5",
//   "Parent 6",
//   "Parent 7",
// ];

const menu_names = [
  "Getting started",
  "Downloading CJX",
  "Installation",
  "Features",
  "Updating CJX",
  "Common problems",
];
const submenu_names = ["Child 1", "Child 2", "Child 3", "Child 4"];
const submenu_names2 = ["Child 5", "Child 6", "Child 7", "Child 8"];
const submenu_names3 = ["Child 9", "Child 10", "Child 11", "Child 12"];
const parent_submenu = [
  submenu_names,
  submenu_names2,
  submenu_names3,
  submenu_names3,
  submenu_names3,
  submenu_names3,
];
const submenu_subchild = ["Subchild1", "Subchild2", "Subchild3", "Subchild4"];
const submenu_subchild2 = ["Subchild5", "Subchild6", "Subchild7", "Subchild8"];
const submenu_subchild3 = ["Subchild1", "Subchild2", "Subchild3", "Subchild4"];
const submenu_subchild4 = ["Subchild1", "Subchild2", "Subchild3", "Subchild4"];
const parent_subchild = [
  submenu_subchild,
  submenu_subchild2,
  submenu_subchild3,
  submenu_subchild4,
];

const initialState = {
  parent: {},
  selectedSubMenu: null,
};

menu_names.map((menu_item) => {
  initialState.parent = {
    ...initialState.parent,
    [menu_item]: { isSelected: true, children: {} },
  };
});

parent_submenu.map((sub_menu, index) => {
  sub_menu.map((child) => {
    initialState.parent[Object.keys(initialState.parent)[index]].children = {
      ...initialState.parent[Object.keys(initialState.parent)[index]].children,
      [child]: { isSelected: true, sub_children: {} },
    };
  });
});


parent_submenu.map((sub_menu, index1) => {
  sub_menu.map((child) => {
    parent_subchild.map((sub_childrens) => {
      sub_childrens.map((sub_child) => {
        initialState.parent[Object.keys(initialState.parent)[index1]].children[
          [child]
        ].sub_children = {
          ...initialState.parent[Object.keys(initialState.parent)[index1]]
            .children[[child]].sub_children,
          [sub_child]: false,
        };
      });
    });
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
