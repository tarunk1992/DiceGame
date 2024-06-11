 import {useState} from 'react';

function GameOn({toggle}){
 
    return(
     <div className='GameOn'>
        <div className='image'>
         <img src='/images/dice.jpg'></img>
         </div>
         <div className='contain'>
            <h1>DICE GAME</h1>
        
            <button onClick={toggle}>PLAY NOW</button>
         </div>


     </div>
   
    )
}

export default GameOn