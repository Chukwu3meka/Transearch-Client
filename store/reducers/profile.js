const profileReducer = (state = {}, { payload, type }) => {
  switch (type) {
    case "SET_PROFILE":
      return { ...state, profile: payload };
    default:
      return state;
  }
};

export default profileReducer;
