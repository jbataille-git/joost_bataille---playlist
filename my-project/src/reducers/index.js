import sortReducer from "./setSort.js"
import songListReducer from "./songList.js"
import newSongReducer from "./newSong.js"

import {combineReducers} from "redux"

const allReducers = combineReducers({
  sortProps: sortReducer,
  songList: songListReducer,
  newSong: newSongReducer

  // je kunt ook schrijven sortReducer: sortReducer
  // of in ES6 gewoon
  // sortReducer
})

export default allReducers;