import Submenu from "./Submenu";
import { ChevronDown, ChevronRight } from "./Chevron";
import { GlobalContext } from "../store/store";
import { useContext } from "react";

export default function Menu({ menu_name }) {
  const { parent, handleParentClick } = useContext(GlobalContext);

  const isSelected = parent[menu_name].isSelected;
  const children = Object.keys(parent[menu_name].children);

  return (
    <>
      <button
        className="flex cursor-pointer gap-3 text-white justify-between items-center py-4 pr-6 "
        onClick={() => handleParentClick(menu_name)}
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
}
