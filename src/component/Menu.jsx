import Submenu from "./Submenu";
import { GlobalContext } from "../store/store";
import { useContext } from "react";

export default function Menu({ menu_name }) {
  const { parent, handleParentClick } = useContext(GlobalContext);

  const isSelected = parent[menu_name].isSelected;
  const children = Object.keys(parent[menu_name].children);

  return (
    <>
      <button
        className="flex cursor-pointer gap-3 text-white justify-between items-center py-4 pr-2"
        onClick={() => handleParentClick(menu_name)}
      >
        <div className="cursor-pointer ">{menu_name}</div>
        <div>
          {isSelected ? (
            <svg
              width={12}
              height={12}
              fill="white"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
            >
              <path d="M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z" />
            </svg>
          ) : (
            <svg
              width={12}
              height={12}
              fill="white"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 320 512"
            >
              <path d="M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256 73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z" />
            </svg>
          )}
        </div>
      </button>
      {isSelected && (
        <div className="pl-4">
          {children.map((submenu_item) => (
            <Submenu key={submenu_item} submenu_name={submenu_item} />
          ))}
        </div>
      )}
    </>
  );
}
