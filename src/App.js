import { useState } from 'react';
import GameOn from './Components/GameOn';
import './Components/Style.css'
import StartGame from './Components/StartGame';
import './Responsive.css';

function App() {

  const [game,setGame]= useState(false)
 
  const toggle= ()=>{
      setGame(!game)
  }
  return (
   <>

   {game ? <StartGame></StartGame> : <GameOn toggle={toggle}></GameOn>}
  
   
   </>
  )
}

export default App;
