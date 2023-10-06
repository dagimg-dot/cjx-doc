const Reducer = (state, action) => {
  switch (action.type) {
    case "PARENT_CLICK":
      console.log(!state.parent[action.payload].isSelected);
      const payload = action.payload;
      const newState = {
        ...state.parent,
        [payload]: {
          isSelected: !state.parent[payload].isSelected,
          children: state.parent[payload].children,
        },
      };
      console.log(newState);
      return newState;
  }
};

export default Reducer;
