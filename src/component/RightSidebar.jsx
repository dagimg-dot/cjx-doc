import { GlobalContext } from "../store/store";
import { useContext } from "react";

export default function RightSidebar() {
  const { selectedSubMenu } = useContext(GlobalContext);
  const subChildren = Object.keys(selectedSubMenu.sub_children);

  return (
    <div className="mx-2">
      {subChildren.length != 0 && (
        <div>
          <h2 className="mb-6">On this page</h2>
          {subChildren.map((sub_child) => (
            <p
              className="my-2 px-2 border-l border-custom-pink"
              key={sub_child}
            >
              {sub_child}
            </p>
          ))}
        </div>
      )}
    </div>
  );
}
