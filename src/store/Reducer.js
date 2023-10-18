import { ACTION_TYPE } from "../utils/types";

const findParent = (parent, submenu_name) => {
  let found = "";
  const parents = Object.keys(parent);
  parents.map((parent_item) => {
    if (parent[parent_item].isSelected) {
      const children = Object.keys(parent[parent_item].children);
      if (children.some((submenu_item) => submenu_item == submenu_name)) {
        found = parent_item;
        console.log(found)
      }
    }
  });

  return found;
};

const Reducer = (state, action) => {
  switch (action.type) {
    case ACTION_TYPE.PARENT_CLICK:
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

    case ACTION_TYPE.CHILD_CLICK:
      const parent = findParent(state.parent, action.payload);
      // console.log(state.parent[parent])

      const choosenChild = state.parent[parent].children[action.payload];
      console.log(choosenChild)

      return {
        parent: {
          ...state.parent,
          [parent]: {
            children: {
              ...state.parent[parent].children,
              [choosenChild]: {
                isSelected: !choosenChild.isSelected,
                ...choosenChild.sub_children,
              },
            },
            ...state.parent[parent],
          },
        },
        selectedSubMenu : choosenChild
      };
  }
};

export default Reducer;
