import { GlobalContext } from "../store/store";
import { useContext, useEffect } from "react";

const RightSidebar = () => {
  const { selectedSubMenu} = useContext(GlobalContext);
  console.log(selectedSubMenu)
  
  return (
    <div className = "mx-10">
      {Object.keys(selectedSubMenu.sub_children).map((sub_child) => (
        <p className="my-2 px-2 border-l border-custom-pink" key={sub_child}>{sub_child}</p>
      ))}
    </div>
  );
};

export default RightSidebar;
