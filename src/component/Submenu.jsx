import { Link, useLocation } from "react-router-dom";
import linkConstructor from "../utils/linkConstructor";

const Submenu = ({ submenu_name }) => {
  const { pathname } = useLocation();

  const selectedColor =
    submenu_name === pathname.split("/").pop().replace(/-/g, " ")
      ? "pl-2 border-l-2 border-[#bcbcbc] text-[#bcbcbc]"
      : "";

  return (
    <button className={"cursor-pointer block " + selectedColor}>
      <Link to={linkConstructor(submenu_name)}>{submenu_name}</Link>
    </button>
  );
};

export default Submenu;
