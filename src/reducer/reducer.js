const reducer = (state = {}, action) => {
  switch (action.type) {
    case "REGISTER":
    case "LOGIN":
    case "ABOUT":
    case "PORTFOLIO":
    case "CONTACT":
    case "LOGOUT":
      return {
        ...state,
        data: action.value,
      };
      break;
  }
  return state;
};
export default reducer;
