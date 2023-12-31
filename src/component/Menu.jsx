import Submenu from "./Submenu";
import { ChevronDown, ChevronRight } from "./Icons/Chevron";
import { GlobalContext } from "../store/store";
import { useContext, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

const Menu = ({ menu_name }) => {
  const { pathname } = useLocation();
  const [isSelected, setIsSelected] = useState(false);
  const { parent, handleParentClick } = useContext(GlobalContext);

  const children = Object.keys(parent[menu_name].children);

  const cleanStr = (str) => {
    if (str.split("").includes("-")) {
      return str.replace(/-/g, " ");
    }
    return str;
  };

  useEffect(() => {
    const category = cleanStr(pathname.split("/")[2]);
    if (category == menu_name) {
      setIsSelected(true);
    }
  }, [pathname]);

  return (
    <>
      <button
        className="flex cursor-pointer gap-3 text-white justify-between items-center py-4 pr-6 "
        onClick={() => setIsSelected(!isSelected)}
      >
        <div className="cursor-pointer ">{menu_name}</div>
        <div>{isSelected ? <ChevronDown /> : <ChevronRight />}</div>
      </button>
      {isSelected && (
        <div className="pl-4 flex flex-col gap-3 items-start md:pl-2">
          {children.map((submenu_item) => (
            <Submenu key={submenu_item} submenu_name={submenu_item} />
          ))}
        </div>
      )}
    </>
  );
};

export default Menu;
