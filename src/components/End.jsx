import React from 'react'

export default function End(props) {
  return (
    <div>
      <br></br>
      <hr style={{ width: '25%' }}></hr >

      <h2 style={{ color: 'red' }}>{props.player.status}</h2>

      <hr style={{ width: '25%' }}></hr >
      <br></br>
      <strong >Win\Lose</strong>
      <strong><p style={{ fontSize: '25px' }}>{props.player.gamesWon}:{props.player.numOfGames - props.player.gamesWon}</p></strong>
      <button style={{
        color: 'white', backgroundColor: 'blue', borderRadius: '10%'
        , height: '30px', marginTop: '10px', border: 'none'
      }} onClick={() => props.playAgain()}><strong>Play Again</strong></button>
    </div>
  )
}
