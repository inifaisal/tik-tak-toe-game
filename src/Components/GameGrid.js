import React, { useEffect, useState } from 'react'
import GridItem from './GridItem'
import GameWinnerOverlay from './GameWinnerOverlay'

const GameGrid = () => {
  const initialItems =  Array(9).fill('');
  const [isUserTurn, setIsUserTurn] = useState(true);
  const [items, setItems] = useState(initialItems);
  const [winner, setWinner] = useState(null);
  const [isGridFull, setIsGridFull] = useState(false);

  const handleOnSelectItem = (item) => {
    const itemList = items;
    if(!winner) {
      if(isUserTurn) {
        itemList.splice(item, 1, 'x')
        setItems(itemList)
      } else {
        itemList.splice(item, 1, 'o')
        setItems(itemList)
      }
      setIsUserTurn(prevState => !prevState);
    }

  };

  // win colum 012 345 789
  const column = (item) => {
    const isSelected = item !== ""
    if(items[0] === item
      && items[1] === item
      && items[2] === item
      && isSelected ) {
        setWinner(item)
    }
    if(items[3] === item
      && items[4] === item
      && items[5] === item
      && isSelected ) {
        setWinner(item)
    }

    if(items[6] === item
      && items[7] === item
      && items[8] === item
      && isSelected ) {
        setWinner(item)
    }
  }

   // win row 036 147 258
  const row = (item) => {
    const isSelected = item !== ""
    if(items[0] === item
      && items[3] === item
      && items[6] === item
      && isSelected ) {
        setWinner(item)
    }
    if(items[1] === item
      && items[4] === item
      && items[7] === item
      && isSelected ) {
        setWinner(item)
    }

    if(items[2] === item
      && items[5] === item
      && items[8] === item
      && isSelected ) {
        setWinner(item)
    }
  }

   // win diagonal 048 246
  const diagonal = (item) => {
    const isSelected = item !== ""
    if(items[0] === item
      && items[4] === item
      && items[8] === item
      && isSelected ) {
        setWinner(item)
    }
    if(items[2] === item
      && items[4] === item
      && items[6] === item
      && isSelected ) {
        setWinner(item)
    }
  }

  const checkGameStatus = () => {
    items.forEach((item) => {
      if(!winner) {
        column(item);
        row(item);
        diagonal(item)
      }
    });
    const allItemSelected = items
      .filter(item => item === "")
      .length === 0;

    if(allItemSelected) {
      setIsGridFull(true);
    }
  };

  useEffect(checkGameStatus, [
    items,
    winner,
    isUserTurn
  ]);

  const handlePlayAgin = () => {
    setItems(initialItems);
    setWinner(null);
    setIsUserTurn(true);
    setIsGridFull(false);
  }

  const isGameOver = !!winner || isGridFull;
  const isDraw = !winner && isGridFull;

  return (
    <div className='game-container'>
      <div className="game-turn-info">
        <h3>{isUserTurn ? "x" : "o"} Turn</h3>
      </div>
      {
        isGameOver && (
          <GameWinnerOverlay
            winner={winner}
            isDraw={isDraw}
            onPlayAgain={handlePlayAgin}
          />
        )
      }
      <div
        data-testid="test-app-container" className='game-grid'
      >
        {
          items.map((item, index) => (
            <GridItem
              key={index}
              onSelectItem={handleOnSelectItem}
              gridId={index}
              text={item}
            />
          ))
        }
      </div>
    </div>
  )
}

export default GameGrid;