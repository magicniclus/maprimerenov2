const initState = { count: 0 };

const reducer = (state = initState, action) => {
  switch (action.type) {
    case "SET_STATE":
      return {
        ...state,
        ...action.payload,
      };
    default:
      return state;
  }
};
