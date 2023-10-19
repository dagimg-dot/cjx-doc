import { GlobalContext } from "../store/store";
import { useContext, useEffect } from "react";

const RightSidebar = () => {
  const { selectedSubMenu} = useContext(GlobalContext);
  console.log(selectedSubMenu)
  
  return (
    <>
      {Object.keys(selectedSubMenu.sub_children).map((sub_child) => (
        <p className="py-2" key={sub_child}>{sub_child}</p>
      ))}
    </>
  );
};

export default RightSidebar;
