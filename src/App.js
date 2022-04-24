import React from 'react';
import './css/App.css'

class App extends React.Component {
  render(){
    return (
      <div className="App">
          <div className='ipod-container'>                  {/* Setting Up Ipod Container */} 
              <div className='ipod-display'>                {/* Setting Up Display Container */}
              </div>
              
              <div className='wheel-container'>             {/* Container of Rotating Wheel and Buttons */}
                  
                  <div id="rotate-container">

                      <div  id="rotatable">               {/* Rotable container for rotating using mouse */}
                        <div className='wheel-button'>    {/* Container for making Wheel Structure */}
                        </div>
                      </div>

                      <button id='menu'>MENU</button>     {/* Menu Button in Wheel */}
                      <img id='previous' src='https://cdn-icons-png.flaticon.com/512/254/254437.png' alt='previous'></img>   {/* Previous Button   */}
                      <img id='next' src='https://cdn-icons-png.flaticon.com/512/254/254428.png' alt='next'></img>            {/*  Next Button */}
                      <img id='play-pause' src='https://cdn-icons.flaticon.com/png/512/5725/premium/5725942.png?token=exp=1650793068~hmac=0c5ef93238b3d06f6d9dc1254952f220' alt='play-pause'></img>    {/* Play Pause Button */}
                  </div>
                </div>
              
          </div>
      </div>
    );
  }
}

export default App;
