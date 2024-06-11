import { useState } from "react";
import RoleDice from "./RoleDice";
import Rule from "./Roles";
import '../Responsive.css';

function StartGame(){

    const data = [1,2,3,4,5,6];
    const [score,setScore]= useState(0);
    const [select,setSelect]= useState();
    const [currentDice,setCurrentDice]= useState(1);
    const [error,setError]= useState();
    const [show,setShow] = useState(false);


     
    const generateRandomNumber = (min , max) =>{
     return Math.floor(Math.random() * (max - min) + min);
    };
    
    const roleDice = () => {
        if(!select) {
            setError("You have not select any number")
            return;
        }
        
     const  randomNumber = generateRandomNumber(1,7);
     setCurrentDice((prev)=> randomNumber);

     if(select === randomNumber){
        setScore((prev)=> prev + randomNumber)
     } else {
        setScore((prev) => prev - 2);
     }
     setSelect(undefined)
    };

    const numberSelectHandler = (val) => {
        setSelect(val);
        setError('');
       

    };

    const resetScore = () =>{
        setScore(0);
        setShow(null)
    }

    const showHide = () => {
        setShow(!show)
    }
  
    return (
    <div className='StartGame'>
    <div className="score_select-section">
        <div className="score">
            <h1>{score}</h1>
            
            <p>Your Score</p>
        </div>
        <div className="select">
            <h5>{error}</h5>
            
            <div className='flex'>
               
           
            {
                
                data.map((val,i)=> (
                    
                    <box  className='box' 
                    
                    isSelected={val === select}
                   
                     onClick={()=>numberSelectHandler(val)}
                     key={i}>{val}</box>
                )
)
            }
            </div>
            <p>Select Number</p>
            
        </div>
    </div>
    <div className="FlexR">
    <RoleDice showHide={showHide} resetScore={resetScore} roleDice={roleDice} currentDice={currentDice}></RoleDice>
   {show ?  <Rule ></Rule> : null}
    </div>
    </div>
    )
}

export default StartGame

