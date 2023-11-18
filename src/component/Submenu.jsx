import { Link } from "react-router-dom";
import useHash from "../hooks/useHash";

const Submenu = ({ submenu_name }) => {
  const currentPage = useHash();
  const selectedColor =
    submenu_name === currentPage
      ? "border-l-2 pl-2 text-[#bcbcbc] border-[#bcbcbc]"
      : "";

  return (
    <button className={`text-white cursor-pointer block ${selectedColor}`}>
      <Link to={"#" + submenu_name}>{submenu_name}</Link>
    </button>
  );
};

export default Submenu;
