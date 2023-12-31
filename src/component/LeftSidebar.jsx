import Menu from "./Menu";
import DocPages from "../utils/docPages";

const LeftSidebar = () => {
  const categories = Object.keys(DocPages);

  return (
    <>
      {categories.map((menu_item) => (
        <Menu key={menu_item} menu_name={menu_item} />
      ))}
    </>
  );
};

export default LeftSidebar;
