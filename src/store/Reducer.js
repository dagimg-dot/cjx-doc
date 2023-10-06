const findParent = (parent, submenu_name) => {
  let found = "";
  const parents = Object.keys(parent);

  parents.map((parent_item) => {
    if (parent[parent_item].isSelected) {
      const children = Object.keys(parent[parent_item].children);
      if (children.some((submenu_item) => submenu_item == submenu_name)) {
        found = parent_item;
      }
    }
  });

  return found;
};

const Reducer = (state, action) => {
  switch (action.type) {
    case "PARENT_CLICK":
      const choosenParent = state.parent[action.payload];
      return {
        ...state,
        parent: {
          ...state.parent,
          [action.payload]: {
            ...choosenParent,
            isSelected: !choosenParent.isSelected,
          },
        },
      };

    case "CHILD_CLICK":
      const parent = findParent(state.parent, action.payload);
      const choosenChildState = state.parent[parent].children[action.payload];
      return {
        parent: {
          ...state.parent,
          [parent]: {
            children: {
              ...state.parent[parent].children,
              [action.payload]: !choosenChildState,
            },
            ...state.parent[parent],
          },
        },
        selectedSubMenu: action.payload,
      };
  }
};

export default Reducer;
