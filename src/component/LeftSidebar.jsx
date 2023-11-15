import React from "react";
import { GlobalContext } from "../store/store";
import Menu from "./Menu";
import { useContext } from "react";

const LeftSidebar = () => {
  const { parent } = useContext(GlobalContext);
  const parents = Object.keys(parent);

  return (
    <>
      {parents.map((menu_item) => (
        <Menu key={menu_item} menu_name={menu_item} />
      ))}
    </>
  );
};

export default LeftSidebar;
