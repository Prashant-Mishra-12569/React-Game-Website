import React from 'react'

export const Game = (props) => {
  return (
    <div className='mygames'>
        <img src={props.img} />
        <h2>{props.title}</h2>
        <h4>Downloads: {props.download}</h4>
    </div>
  )
}
export default Game