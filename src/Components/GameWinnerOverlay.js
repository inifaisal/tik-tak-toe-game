import React from 'react'

const GameWinnerOverlay = (props) => {
  const {
    isDraw,
    winner,
    onPlayAgain
  } = props;
  const renderText = () => {
    if(isDraw) {
      return (
       <>
        <h3>Game Over!</h3>
        <p>Draw, no winner.</p>
       </>
      )
    }

    return (
      <>
        <h3> Game Over!</h3>
        <p>"{winner}" win.</p>
      </>
    )
  }

  return (
    <div className='game-over'>
      {isDraw}
      {renderText()}
      <div>
        <button onClick={onPlayAgain}>Play Again</button>
      </div>
    </div>
  )
}

export default GameWinnerOverlay;