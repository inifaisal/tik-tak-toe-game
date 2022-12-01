import React from 'react'

const GridItem = (props) => {
  const {
    text,
    onSelectItem,
    gridId
  } = props;

  const handleOnSelect = () => {
    if(text === "") {
      onSelectItem(gridId)
    }
  }

  return (
    <div
      data-testid="grid-item"
      className='game-grid-item'
      onClick={handleOnSelect}
    >
      <span
        data-testid="grid-item-button"
      >
        {text}
      </span>
    </div>
  )
}

export default GridItem;
