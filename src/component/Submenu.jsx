import { useContext } from "react";
import { GlobalContext } from "../store/store";

export default function Submenu({ submenu_name }) {
  const { handleChildClick } = useContext(GlobalContext);

  return (
    <button
      className="text-white cursor-pointer block"
      onClick={() => handleChildClick(submenu_name)}
    >
      {submenu_name}
    </button>
  );
}
