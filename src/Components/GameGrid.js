import React, { useEffect, useState } from 'react'
import GridItem from './GridItem'

const GameGrid = () => {
  const [user, setUser] = useState([]);
  const [apponent, setApponent] = useState([]);
  const [isUserTurn, setIsUserTurn] = useState(true);

  const handleOnSelectItem = (item) => {
    if(isUserTurn) {
      setUser([...user, item])
    } else {
      setApponent([...apponent, item])
    }
    setIsUserTurn(prevState => !prevState);
  };

  const getItemText = (index) => {
    const userSelectedItem = user.some(item => {
      return item === index
    });

    if(userSelectedItem) {
      return 'x'
    }

    const apponentSelectedItem = apponent.some(item => {
      return item === index
    });

    if(apponentSelectedItem) {
      return 'o'
    }
  }

  const checkGameStatus = () => {
    console.log(user.toString())
    if(user.toString() === '0,1,2') {

    }
  };

  useEffect(checkGameStatus, [user, apponent]);

  const items = Array(9).fill(0);

  return (
    <div data-testid="test-app-container" className='game-grid'>
      {
       items.map((_, index) => (
          <GridItem
            key={index}
            onSelectItem={handleOnSelectItem}
            gridId={index}
            text={getItemText(index)}
          />
        ))
      }

    </div>
  )
}

export default GameGrid