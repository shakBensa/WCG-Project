import './App.css';
import Home from './components/Home';
import Main from './components/Main';
import End from './components/End';
import { useEffect, useState } from 'react';

function App() {

const [scrnFlag,setScrnFlag] = useState("home")
const [cards,setCards] = useState([])
const drawRandomCards = () => {
let tempPack = [];
let count= [0,0,0,0,0,0,0,0,0,0,0,0,0]
for (let i = 0; i<52;i++){

  let randomNum = Math.floor(Math.random() * (14-1)+1)

  if(count[randomNum-1]<4){
    tempPack.push(randomNum);
    count[randomNum-1]++
  }
else{
  i--

}
}
  setCards(tempPack)
}

useEffect(()=>{

  drawRandomCards()

},[]);

const nav = () =>{
  if (scrnFlag === "home")
  {  return   <Home saveName={saveName}/>


  }
  else if (scrnFlag === "main") {
    return     <Main whoWon={whoWon} setEnd={setEnd} itsATie={itsATie} addWin={addWin} addLose={addLose} player={player} computer={computer}/>

  }
  else{return     <End player={player} playAgain={playAgain}/>

  }
}
const setEnd = () => {

  
  setScrnFlag("end")
}

const whoWon = ()=> {
  if( player.roundWins > player.roundLoses) {
    
    player.status = "You Won!";
    player.numOfGames = player.numOfGames+1;
    player.gamesWon = player.gamesWon+1;

    setPlayer({...player});

  }
  else{
    player.status = "You Lost!";
    player.numOfGames = player.numOfGames+1;
    setPlayer({...player});

  }
}
const [player,setPlayer] = useState({

  name:"",
  roundWins:0,
  roundLoses:0,
  gamesWon:0,
  numOfGames:0,
  status:"",
  playerCards:[]
  

});
const addWin = () => {
  player.roundWins = player.roundWins+1;
  player.playerCards.shift()
  setPlayer({...player})
computer.shift()
  setComputer([...computer])
}

const itsATie = ()=> {
  player.playerCards.shift()
  setPlayer({...player})
computer.shift()
  setComputer([...computer])
}
const addLose = () => {
  player.roundLoses = player.roundLoses+1;
  setPlayer({...player})
  player.playerCards.shift()
  computer.shift()
  setComputer([...computer])

}
const saveName = (name)=>{
  player.name = name
  setPlayer({...player});
  dealCards();

}
const playAgain = () => {

    setScrnFlag("home")
    player.roundLoses = 0
    player.roundWins = 0
  
    setPlayer({...player});
  

}


const [computer,setComputer] = useState([]);

const dealCards =()=>{
  let copiedCardPack=[...cards];
let tempPlayerCards = [];
for (let i = 0; i<26;i++){
  let randomIndex=Math.floor(Math.random() * (copiedCardPack.length-1))
  tempPlayerCards.push(copiedCardPack[randomIndex]);

  copiedCardPack.splice(randomIndex,1);
}
player.playerCards=tempPlayerCards;
setPlayer({...player})
setComputer(copiedCardPack)
setScrnFlag('main');

}

  return ( 
  
  <div className="App"> {nav()} </div>
  );
}

export default App;
