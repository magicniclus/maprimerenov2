const initState = { userInformation: {}, step: 0 };

const reducer = (state = initState, action) => {
  switch (action.type) {
    case "UPDATE_USER_INFORMATIONS":
      return {
        ...state,
        userInformation: {
          ...state.userInformation,
          ...action.payload,
        },
      };
    case "UPDATE_STEP":
      return {
        ...state,
        step: action.payload,
      };
    default:
      return state;
  }
};

export default reducer;
