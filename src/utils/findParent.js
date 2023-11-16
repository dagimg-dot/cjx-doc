const findParent = (parent, submenu_name) => {
  let found = "";
  const parents = Object.keys(parent);
  parents.map((parent_item) => {
    // if (parent[parent_item].isSelected) {
    const children = Object.keys(parent[parent_item].children);
    if (children.some((submenu_item) => submenu_item == submenu_name)) {
      found = parent_item;
    }
    // }
  });

  return found;
};

export default findParent;
