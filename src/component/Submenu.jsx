import { Link } from "react-router-dom";
import useHash from "../hooks/useHash";

const Submenu = ({ submenu_name }) => {
  const [currentPage] = useHash();
  const selectedColor =
    submenu_name === currentPage
      ? "pl-2 border-l-2 border-[#bcbcbc] text-[#bcbcbc]"
      : "";

  return (
    <button className={"cursor-pointer block " + selectedColor}>
      <Link to={"#" + submenu_name}>{submenu_name}</Link>
    </button>
  );
};

export default Submenu;
