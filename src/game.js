import React from 'react';
import './main.css'

const cellSize = 20
const width = 800
const height = 600

class Game extends React.Component {
  render (){
    return(
      <div>
        <div className="Board" style = {{width: width, height: height, backgroundSize: `${cellSize}px ${cellSize}px`}} />
      </div>
    )
    
  }
}

export default Game