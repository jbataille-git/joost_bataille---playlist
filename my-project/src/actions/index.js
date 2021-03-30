export const setSortField = (sortField) => {
  return {
    type: 'SETSORTFIELD',
    payload: sortField
  }
}

export const setReverseSort = (inputValue) => {
  return {
    type: "SETREVERSESORT",
    payload: inputValue
  };
};

export const clearSongList = () => {
  return {
    type: "CLEARSONGLIST"
  }
}

export const addSongToList = (song) => {
  return {
    type: "ADDSONGTOLIST",
    payload: song
  }
}

export const editNewSong = (newSong) => {
  return {
    type: "EDITNEWSONG",
    payload: newSong
  }
}