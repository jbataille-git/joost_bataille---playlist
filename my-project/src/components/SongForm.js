import React from "react"

function SongForm(props) {

  return (
    <div>
      <table className="song-form-table">
        <tbody>
        <tr>
          <td colSpan="4">Fill in your new song below</td>
        </tr>  
        <tr className="song-row">
          <th className="song-row__item">Song</th>
          <th className="song-row__item">Artist</th>
          <th className="song-row__item">Genre</th>
          <th className="song-row__item">Rating</th>
        </tr>
        <tr>
          <td><input
            className="new-song-item"
            type="text"
            maxLength="60"
            name="song" 
            placeholder="fill in the song's name"
            value={props.stateData.song}
            onChange={props.handleOnChange}
            />
          </td>
          <td><input
            className="new-song-item"
            type="text"
            maxLength="50"
            name="artist" 
            placeholder="fill in the artist's name"
            value={props.stateData.artist}
            onChange={props.handleOnChange}
            />
          </td>
          <td><input
            className="new-song-item"
            type="text"
            maxLength="50"
            name="genre" 
            placeholder="fill in the genre's name"
            value={props.stateData.genre}
            onChange={props.handleOnChange}
            />
          </td>
          <td><input 
            className="new-song-item"
            type="text"
            maxLength="50"
            name="rating" 
            placeholder="fill in the rating"
            onChange={props.handleOnChange}
            value={props.stateData.rating}
            />
          </td>
        </tr>
        <tr>
          <td colSpan="4" className="add-song-row">
            <button className="add-song-button" onClick={props.handleClick}>Add song to playlist</button>
          </td>
        </tr>
        </tbody>
      </table>
    </div>
  );
}

export default SongForm;
