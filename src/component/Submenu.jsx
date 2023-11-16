import { useContext } from "react";
import { GlobalContext } from "../store/store";

const Submenu = ({ submenu_name }) => {
  const { selectedSubMenu, handleChildClick } = useContext(GlobalContext);
  const selectedColor =
    submenu_name === selectedSubMenu.name
      ? "border-l-2 pl-2 text-custom-pink border-custom-pink"
      : "";

  return (
    <button
      className={`text-white cursor-pointer block ${selectedColor}`}
      onClick={() => handleChildClick(submenu_name)}
    >
      {submenu_name}
    </button>
  );
};

export default Submenu;
