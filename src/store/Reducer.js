const Reducer = (state, action) => {
  switch (action.type) {
    case "PARENT_CLICK":
      const payload = action.payload;
      return {
        ...state,
        [payload]: { isSelected: !state[payload].isSelected, children: {} },
      };
  }
};

export default Reducer;
