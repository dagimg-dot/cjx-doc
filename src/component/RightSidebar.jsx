import useHash from "../hooks/useHash";

const RightSidebar = () => {
  const [currentPage, parent] = useHash();
  const subTopics = parent.children[currentPage].sub_children;
  const subChildren = Object.keys(subTopics);

  return (
    <div className="mx-2">
      {subChildren.length > 0 ? (
        <div className="flex flex-col">
          <h2 className="mb-4 font-bold text-lg">On this page</h2>
          {subChildren.map((sub_child) => (
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
