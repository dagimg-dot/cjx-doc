import Submenu from "./Submenu";
import { ChevronDown, ChevronRight } from "./Icons/Chevron";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import DocPages from "../utils/docPages";
import cleanStr from "../utils/cleanStr";

const Menu = ({ menu_name }) => {
  const { pathname } = useLocation();
  const [isSelected, setIsSelected] = useState(false);

  const children = Object.keys(DocPages[menu_name]);

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
