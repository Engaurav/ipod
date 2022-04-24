import React from 'react';
import './css/App.css'
import Srivalli from './music/Srivalli.mp3';
import MaanLe from './music/Maan Le.mp3';
import Voodoo from './music/Voodoo.mp3';
import Music from './components/Music';
import Menu from './components/Menu'
import ZingTouch from "zingtouch";
import Games from "./components/Games"
import Setting from "./components/Setting"


class App extends React.Component {

  constructor (){
    super();
    this.state ={
      // Created Song List
      songlist : [
        {
            name: "Srivalli",
            image: "https://www.pagalworld.pw/GpE34Kg9Gq/113563/148511-srivalli-pushpa-mp3-song-300.jpg",
            artist: "Javed Ali",
            song: Srivalli
        },
        {
            name: "Maan Le",
            image: "https://www.pagalworld.pw/GpE34Kg9Gq/113631/149341-maan-le-arijit-singh-mp3-song-300.jpg",
            artist: "Arijit Singh",
            song: MaanLe
        },
        {
            name: "Voodoo",
            image: "https://www.pagalworld.pw/GpE34Kg9Gq/113604/149340-voodoo-badshah-mp3-song-300.jpg",
            artist: "Badshah",
            song: Voodoo
        }
    ],
    isPlaying : true,   //bollean value to control play pause
    songIndex : 0,      // index value to control song list
    audio : new Audio(),  //initialising song
    menu:false,       //to handle Menu
    music: true,     //to handle Music Display
    deg:0,            //to handle rotatble div
    pdeg:0,           //to handle rotatble div
    }
  }
  componentDidMount() {
    this.setState({
      audio : new Audio(this.state.songlist[this.state.songIndex].song)     //Setting Up 1st song as Audio
    })   
  }

  componentDidUpdate() {

    // Setting Play Pause on every setState on next song and previous song
    if(this.state.isPlaying){
      this.state.audio.pause();       
    }else{
      this.state.audio.play();
    }
  }


  // Function to handle Play Pause
  playPause = () => {
    if(this.state.isPlaying){
      this.state.audio.pause();
      this.setState({
        isPlaying : false
      })
    }else{
      this.state.audio.play();
      this.setState({
        isPlaying : true
      })
    }
  }

  // Function to handle Next Song
nextSong =  ()  => {
    this.state.audio.pause();
    if(this.state.songIndex < this.state.songlist.length - 1){
      this.setState({
        songIndex:  this.state.songIndex + 1,
        audio :  new Audio(this.state.songlist[this.state.songIndex + 1].song)
      })
    }else{
      this.setState({
        songIndex:  0,
        audio :  new Audio(this.state.songlist[0].song)
      })
    }
}


 // Function to handle Previous Song
previousSong = () => {
  this.state.audio.pause();
  if(this.state.songIndex > 0){
    this.setState({
      songIndex:  this.state.songIndex - 1,
      audio :  new Audio(this.state.songlist[this.state.songIndex - 1].song)
    })
  }else{
    this.setState({
      songIndex:  this.state.songlist.length - 1,
      audio :  new Audio(this.state.songlist[this.state.songlist.length - 1].song)
    })
  }
}


 //menu button display handler
 menuButtonHandle = () => {
  if(this.state.menu){
    this.setState({
      menu:false,
      games:false,
      setting: false,
      music: true
    })
    
  }else{
    this.setState({
      menu:true,
      games:false,
      setting: false,
      music: false
    })
  }
}


//Using Zingtouch Rotate function to select menu list item using menu touch
deggree = () => {
  var deggree =0;
  var myElement = document.getElementById('rotatable');
  var myTapGesture = new ZingTouch.Rotate();
  var myRegion = new ZingTouch.Region(document.body);

  myRegion.bind(myElement, myTapGesture, (e) => {
      deggree = Math.floor(e.detail.distanceFromOrigin);
      if(this.state.deg + 20 < deggree || deggree < this.state.deg -20 ){
      this.setState({
        pdeg:this.state.deg,
        deg:deggree
      })}
  }, false);
}

// To Handle Menu Item
menuItemHandle = () => {
  var active = document.getElementById('active');
  // console.log(active)
  if(active != null && active.innerText === "All Music"){
    // console.log("aLL mUSIC CLICKED");
    this.setState({
      menu:false,
      games:false,
      setting: false,
      music: true

    })
  }
  if(active != null && active.innerText === "Games"){
    // console.log("gAMES CLICKED");
    this.setState({
      menu:false,
      games:true,
      setting: false,
      music: false

    })
  }
  if(active != null && active.innerText === "Setting"){
    // console.log("sETTING CLICKED");
    this.setState({
      menu:false,
      games:false,
      setting: true,
      music: false
    })
  }
}



  render(){
    return (
      <div className="App">
          <div className='ipod-container'>                  {/* Setting Up Ipod Container */} 
              <div className='ipod-display'>                {/* Setting Up Display Container */}
               
                  {this.state.menu && <Menu degree = { this.state} />}
                  {this.state.games && <Games />}
                  {this.state.setting && <Setting />}
                  { this.state.music && <Music song={this.state.songlist[this.state.songIndex] }/>  }   {/* To Handle Music Display for Every Song  */}
              </div>
              
              <div className='wheel-container'>             {/* Container of Rotating Wheel and Buttons */}
                <div id="wrapper">  
                  <div id="rotate-container">
                      <div onMouseDown ={ this.deggree }  id="rotatable">               {/* Rotable container for rotating using mouse */}
                        <div onClick={ this.menuItemHandle } className='wheel-button'>    {/* Container for making Wheel Structure */}
                        </div>
                      </div>

                      <button id='menu' onClick={this.menuButtonHandle}>MENU</button>     {/* Menu Button in Wheel */}
                      <img onClick={ this.previousSong } id='previous' src='https://cdn-icons-png.flaticon.com/512/254/254437.png' alt='previous'></img>   {/* Previous Button   */}
                      <img onClick={this.nextSong} id='next' src='https://cdn-icons-png.flaticon.com/512/254/254428.png' alt='next'></img>            {/*  Next Button */}
                      <img onClick={ this.playPause} id='play-pause' src='https://cdn-icons.flaticon.com/png/512/5725/premium/5725942.png?token=exp=1650793068~hmac=0c5ef93238b3d06f6d9dc1254952f220' alt='play-pause'></img>    {/* Play Pause Button */}
                  </div>
                </div>
              </div>
          </div>
      </div>
    );
  }
}

export default App;
