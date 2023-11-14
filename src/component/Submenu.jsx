import { useContext } from "react";
import { GlobalContext } from "../store/store";

export default function Submenu({ submenu_name }) {
  const { selectedSubMenu, handleChildClick } = useContext(GlobalContext);
  const selectedColor = submenu_name === selectedSubMenu.name ? "border-l-2 pl-2 text-[#bcbcbc] border-[#bcbcbc]" : ""

  return (
    <button
      className={`text-white cursor-pointer block ${selectedColor}`}
      onClick={() => handleChildClick(submenu_name)}
    >
      {submenu_name}
    </button>
  );
}
