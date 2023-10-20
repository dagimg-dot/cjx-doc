import { GlobalContext } from "../store/store";
import { useContext } from "react";

const RightSidebar = () => {
  const { selectedSubMenu } = useContext(GlobalContext);
  const subChildren = Object.keys(selectedSubMenu.sub_children);

  return (
    <div className="mx-10">
      {subChildren.map((sub_child) => (
        <p className="my-2 px-2 border-l border-custom-pink" key={sub_child}>
          {sub_child}
        </p>
      ))}
    </div>
  );
};

export default RightSidebar;
