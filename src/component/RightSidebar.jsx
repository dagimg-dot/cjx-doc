import { useLocation } from "react-router-dom";
import { onThisPageTopics } from "../utils/data";
import cleanStr from "../utils/cleanStr";

const RightSidebar = () => {
  const { pathname } = useLocation();
  const topics = onThisPageTopics[cleanStr(pathname.split("/").pop())];

  return (
    <div className="mx-2">
      {topics.length > 0 ? (
        <div className="flex flex-col">
          <h2 className="mb-4 font-bold text-lg">On this page</h2>
          {topics.map((sub_child) => (
            <p
              className="my-2 px-2 border-l-2 border-custom-pink"
              key={sub_child}
            >
              {sub_child}
            </p>
          ))}
        </div>
      ) : (
        <p className="">No Sub topics for this page</p>
      )}
    </div>
  );
};

export default RightSidebar;
