import { Link, useLocation } from "react-router-dom";
import DocPages from "../utils/docPages";

const Submenu = ({ submenu_name }) => {
  const { pathname } = useLocation();

  const findCategory = (submenuName) => {
    for (const [category, pages] of Object.entries(DocPages)) {
      if (submenuName in pages) {
        return category;
      }
    }
    return null;
  };

  const linkConstructor = () => {
    const BASE_URL = "/docs";
    const link =
      BASE_URL + "/" + findCategory(submenu_name) + "/" + submenu_name;
    const finalLink = link.replace(/\s+/g, "-");
    return finalLink;
  };

  const selectedColor =
    submenu_name === pathname.split("/").pop().replace(/-/g, " ")
      ? "pl-2 border-l-2 border-[#bcbcbc] text-[#bcbcbc]"
      : "";

  return (
    <button className={"cursor-pointer block " + selectedColor}>
      <Link to={linkConstructor()}>{submenu_name}</Link>
    </button>
  );
};

export default Submenu;
