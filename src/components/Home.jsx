import React from 'react'
import { useState } from 'react';

export default function Home(props) {
    const [playerName, setPlayerName] = useState("")

    const saveInput = (e) => {
        setPlayerName(e.target.value)
    }

    const sendName = () => {
        if (playerName !== "") {
            props.saveName(playerName)
        }
        else {
            alert('Name is required')
        }

    }
    return (
        <div>
            <section id="homeContainer" style={{ backgroundImage: `url(https://pbs.twimg.com/profile_images/928090614696161280/HyHOvg8b_400x400.jpg)`, backgroundSize: 'contain', backgroundRepeat: 'no-repeat', backgroundPosition: 'center' }}>

                <h1 style={{ marginBottom: '10px', fontSize: '45px', textShadow: 'rgb(255, 255, 255) 2px 0px 0px, rgb(255, 255, 255) 1.75517px 0.958851px 0px, rgb(255, 255, 255) 1.0806px 1.68294px 0px, rgb(255, 255, 255) 0.141474px 1.99499px 0px, rgb(255, 255, 255) -0.832294px 1.81859px 0px, rgb(255, 255, 255) -1.60229px 1.19694px 0px, rgb(255, 255, 255) -1.97998px 0.28224px 0px, rgb(255, 255, 255) -1.87291px -0.701566px 0px, rgb(255, 255, 255) -1.30729px -1.5136px 0px, rgb(255, 255, 255) -0.421592px -1.95506px 0px, rgb(255, 255, 255) 0.567324px -1.91785px 0px, rgb(255, 255, 255) 1.41734px -1.41108px 0px, rgb(255, 255, 255) 1.92034px -0.558831px 0px' }}>War Card Game</h1>

                <input type="text" onChange={saveInput} name="name" placeholder="Enter your name" />
                <br></br>
                <button onClick={sendName} style={{
                    color: 'white', backgroundColor: 'blue', borderRadius: '10%'
                    , height: '30px', marginTop: '20px', border: 'none'
                }}
                ><strong>Start</strong></button>
            </section>
        </div>
    )
}
