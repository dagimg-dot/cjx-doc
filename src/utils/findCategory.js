import DocPages from "./docPages";

const findCategory = (submenuName) => {
  for (const [category, pages] of Object.entries(DocPages)) {
    if (submenuName in pages) {
      return category;
    }
  }
  return null;
};

export default findCategory;
