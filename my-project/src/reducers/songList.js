const songListReducer = (
  state = {songsArray: []}, action) => {
  let newState = { ...state };

  if (action.type === "CLEARSONGLIST") {
    newState = { ...state, songsArray: [] };
  }

  if (action.type === "ADDSONGTOLIST") {
    const newSongsArray = Array.from(state.songsArray);
    newSongsArray.push(action.payload);
    newState = { ...state, songsArray: newSongsArray };
  }

  return newState;
};

export default songListReducer;
