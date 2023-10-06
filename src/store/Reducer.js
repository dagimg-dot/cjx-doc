const Reducer = (state, action) => {
  switch (action.type) {
    case "PARENT_CLICK":
      const payload = action.payload;
      const newState = {
        parent: {
          ...state.parent,
          [payload]: {
            isSelected: !state.parent[payload].isSelected,
            children: state.parent[payload].children,
          },
        },
      };
      return newState;
  }
};

export default Reducer;
