import DocBody from "../component/DocBody";
import Menu from "../component/Menu";
import { GlobalContext, GlobalProvider } from "../store/store";
import { useContext } from "react";
import Default from "../layout/Default";

export default function () {
  const { parent } = useContext(GlobalContext);

  const handleClick = (menu_name) => {
    dispatch({ type: "PARENT_CLICK", payload: menu_name });
  };

  return (
    <div className="bg-bodyGradient w-screen h-screen">
      <Default>
        <h1 className="text-white">Docs</h1>
        <GlobalProvider>
          {Object.keys(parent).map((menu_item, index) => (
            <Menu
              // state={state}
              key={menu_item}
              menu_name={menu_item}
              // submenu_names={parent_submenu[index]}
              clickHandler={handleClick}
            />
          ))}
          <DocBody />
        </GlobalProvider>
      </Default>
    </div>
  );
}
