const initState = { userInformation: {}, step: 0, pagination: 1 };

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
    case "SET_CONTACTS":
      return {
        ...state,
        contacts: action.payload,
      };
    case "SET_TOTAL_CONTACTS":
      return {
        ...state,
        totalContacts: action.payload,
      };
    case "UPDATE_PAGINATION":
      return {
        ...state,
        pagination: action.payload,
      };
    default:
      return state;
  }
};

export default reducer;
