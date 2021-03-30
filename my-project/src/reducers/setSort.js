const sortReducer = ( state = { field: "song", reverse: false }, action) => {

  let newState = { ...state}

  if (action.type === "SETSORTFIELD") {
      if (action.payload != null) {
      newState.field = action.payload;
      } else {
        newState.field = "song"
      }
      return newState;
  }

  if (action.type === "SETREVERSESORT") {
    if (action.payload == null) {
      newState.reverse = false;
    } else {
      newState.reverse = !action.payload;
    }

    return newState;
  }

  return newState;

}

export default sortReducer;

