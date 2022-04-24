import React from "react";
import '../css/Music.css';


const Music = (props) =>  {
   
    return(
        <div className='music-display'>
            <div id="music-display-detail">
                <div>
                    <img id="song-img" alt="song-thumbnil" src={props.song.image}></img>  {/* Song Image  */}
                </div>
                <div id="song-detail">
                   <b>{props.song.name}</b><br></br>            {/* Song Name */}
                   <span>{props.song.artist}</span>         {/* Song Artist  */}
                </div>
            </div>
            <div id="song-play">
                <span id="song-start">0:00</span>
                <input id="song-range" type="range" ></input>
                <span id="song-end">3:40</span>
            </div>
        </div>     
    );
}



export default Music;