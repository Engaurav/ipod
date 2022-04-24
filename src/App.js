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
                
              </div>
          </div>
      </div>
    );
  }
}

export default App;
