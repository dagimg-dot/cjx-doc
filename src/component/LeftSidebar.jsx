import React from "react";
import { GlobalContext } from "../store/store";
import Menu from "./Menu";
import { useContext } from "react";

const LeftSidebar = () => {
  const { parent } = useContext(GlobalContext);
  const parents = Object.keys(parent);

  return (
    <div className="border-r border-custom-white">
      {parents.map((menu_item) => (
        <Menu key={menu_item} menu_name={menu_item} />
      ))}
    </div>
  );
};

export default LeftSidebar;
