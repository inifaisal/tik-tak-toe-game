import React from 'react'

const GameWinnerOverlay = (props) => {
  const { winner, onPlayAgain} = props;
  return (
    <div className='game-over'>
     <h3> Game Over!</h3>
      <p>"{winner}" win.</p>
      <div>
        <button onClick={onPlayAgain}>Play Again</button>
      </div>
    </div>
  )
}

export default GameWinnerOverlay;