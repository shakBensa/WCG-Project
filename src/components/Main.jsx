import React from 'react'


export default function Main(props) {
    const checkCards = () => {
        if (props.player.playerCards.length === 0) {
            props.whoWon()
            props.setEnd()
        }

        else {
            if (props.player.playerCards[0] > props.computer[0]) {
                props.addWin()
                alert('Player Won')

            }
            else if (props.player.playerCards[0] === props.computer[0]) {
                alert('Tough Luck its a Tie')
                props.itsATie()

            }
            else {
                props.addLose()


                alert('Computer Won')

            }

        }
    }
    return (
        <div>
            <div id="mainContainer">
                {/* <h1 style={{margin:'5px'}}>Let's Play</h1> */}
                <h2 style={{ margin: '5px', textShadow: '2px 2px 2px rgba(206,0,0,0.4)' }}>Computer</h2>
                <div id="compCard" className="card" style={{ color: 'red' }}>{props.computer[0]}
                    {props.computer.length === 0 && <h3>Click Next To See Who Won !</h3>}


                </div>
                <div id="userCard" className="card" style={{ color: 'blue' }}>{props.player.playerCards[0]}
                    {props.player.playerCards.length === 0 && <h3>Click Next To See Who Won !</h3>}

                </div>
                <h2 style={{ margin: '5px', textShadow: '2px 2px 2px rgba(0,26,206,0.4)' }} >{props.player.name}</h2>
                <p style={{ position: 'absolute', left: '50vh', bottom: '50vh', fontWeight: 'bolder' }}>Round:{props.player.roundWins + props.player.roundLoses}</p>
                <button style={{
                    color: 'white', backgroundColor: 'blue', borderRadius: '10%'
                    , height: '30px', width: '55px', marginTop: '10px', border: 'none'
                }} onClick={checkCards}><strong>Next</strong></button>

            </div>
        </div>
    )
}
