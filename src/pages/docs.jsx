import NavigationBar from "../component/NavigationBar";
import Menu from "../component/Menu";
import { useReducer } from "react";

const initialState = {
  "Parent 1": false,
  "Parent 2": false,
  "Parent 3": false,
};

const reducer = (state, action) => {
  const payload = action.payload;
  return { ...state, [payload]: !state[payload] };
};

export default function () {
  const [state, dispatch] = useReducer(reducer, initialState);

  const menu_names = ["Parent 1", "Parent 2", "Parent 3"];
  const submenu_names = ["Child 1", "Child 2", "Child 3", "Child 4"];
  const submenu_names2 = ["Child 5", "Child 6", "Child 7", "Child 8"];
  const submenu_names3 = ["Child 9", "Child 10", "Child 11", "Child 12"];
  const parent_submenu = [submenu_names, submenu_names2, submenu_names3];

  const handleClick = (menu_name) => {
    dispatch({ payload: menu_name });
  };

  return (
    <div className="bg-bodyGradient w-screen h-screen">
      <NavigationBar />
      <h1 className="text-white">Docs</h1>
      {menu_names.map((menu_item, index) => (
        <Menu
          state={state}
          key={menu_item}
          menu_name={menu_item}
          submenu_names={parent_submenu[index]}
          clickHandler={handleClick}
        />
      ))}
    </div>
  );
}
