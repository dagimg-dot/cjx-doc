import findCategory from "./findCategory";

const linkConstructor = (submenu_name) => {
  const BASE_URL = "/docs";
  const link = BASE_URL + "/" + findCategory(submenu_name) + "/" + submenu_name;
  const finalLink = link.replace(/\s+/g, "-");
  return finalLink;
};

export default linkConstructor;
