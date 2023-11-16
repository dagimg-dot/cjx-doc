import { ACTION_TYPE } from "../utils/types";
import findParent from "../utils/findParent";

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

      const choosenChild = state.parent[parent].children[action.payload];

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
        selectedSubMenu: choosenChild,
      };
  }
};

export default Reducer;
