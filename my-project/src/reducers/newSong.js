const newSongReducer = (state, action) => {

  const newSong = {
    song: "V-flow",
    artist: "Eric Vloeimans",
    genre: "Electro-jazz",
    rating: "5",
  };

  if (action.type === "EDITNEWSONG")  {
    return action.payload;
  }

  return newSong;
}

export default newSongReducer;
