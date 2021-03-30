import React from "react"

function SongList(props) {

  const sortStyle = {
    backgroundImage: "linear-gradient(white, #555)"
  }

  const sortStyleNoStyle = {
    backgroundColor: "white"
  }

  const orderedListOfSongs = [ ...props.stateData.songsArray ]
  
  if (props.sortColumn === "rating") {
    orderedListOfSongs.sort( (a, b) => parseInt(a.rating) - parseInt(b.rating))
  } else {
    orderedListOfSongs.sort((a,b) => a[props.sortColumn] < b[props.sortColumn] ? -1 : 1 )  
  }

  if (props.sortReverse) {
    sortStyle.backgroundImage = "linear-gradient(#555, white)"
    orderedListOfSongs.reverse();
  }


  const listOfSongs = orderedListOfSongs.map((item) => {
    return <tr key={item.song}>
              <td>{item.song}</td>
              <td>{item.artist}</td>
              <td>{item.genre}</td>
              <td>{item.rating}</td>
            </tr>
  })

  return (
    <div>
      <table className="song-list-table">
        <tbody>
          <tr className="song-row">
            <th className="song-row__item">Song</th>
            <th className="song-row__item">Artist</th>
            <th className="song-row__item">Genre</th>
            <th className="song-row__item">Rating</th>
          </tr>
          <tr className="sort-buttons-row">
            
            <td className="sort-button-container" style= { props.sortColumn === "song" ? sortStyle : sortStyleNoStyle }>
              <button name="song" className="sort-button" onClick={props.handleSortClick}>
                Sort list on songtitle
              </button>
            </td>

            <td className="sort-button-container" style= { props.sortColumn === "artist" ? sortStyle : sortStyleNoStyle }>
              <button name="artist" className="sort-button" onClick={props.handleSortClick}>
                Sort list on artist
              </button>
            </td>
            
            <td className="sort-button-container" style= { props.sortColumn === "genre" ? sortStyle : sortStyleNoStyle }>
              <button name="genre" className="sort-button" onClick={props.handleSortClick}>
                Sort list on genre
              </button>
            </td>
            
            <td className="sort-button-container" style= { props.sortColumn === "rating" ? sortStyle : sortStyleNoStyle }>
              <button name="rating" className="sort-button" onClick={props.handleSortClick}>
                Sort list on rating
              </button>
            </td>
          
          </tr>
          
          {listOfSongs}
          
          <tr>
            <td colSpan="4" className="delete-songs-row">
              <button className="clear-list-button" onClick={props.clearList}>Delete all songs from playlist</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default SongList;
