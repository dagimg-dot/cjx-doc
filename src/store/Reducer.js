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
      const { parentName } = findParent(state.parent, action.payload);

      const choosenChild = state.parent[parentName].children[action.payload];

      return {
        parent: {
          ...state.parent,
          [parentName]: {
            children: {
              ...state.parent[parentName].children,
              [choosenChild]: {
                isSelected: !choosenChild.isSelected,
                ...choosenChild.sub_children,
              },
            },
            ...state.parent[parentName],
          },
        },
        selectedSubMenu: choosenChild,
      };
  }
};

export default Reducer;
