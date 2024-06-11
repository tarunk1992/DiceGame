import { useState } from "react"


function RoleDice({roleDice,currentDice,resetScore,showHide}){
 
    return(
    <div className="RoleDice">
        <div className="Dice-section" onClick={roleDice}>
            <img src={`/dice/dice_${currentDice}.png`} alt="dice 1"></img>
            <p>Click On Dice To Roll</p>
        </div>
        <div className="btns">
            <button className="btn1" onClick={resetScore}>Reset Game</button>
            <button className="btn2" onClick={showHide}>Show Roles</button>
        </div>
    </div>
    )
}

export default RoleDice