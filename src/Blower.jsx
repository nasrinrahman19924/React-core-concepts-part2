import { useState } from "react"

 export default function Blower() {
    const [BallCount, setBallCount] = useState(0);
    const [Over, steOver] = useState(0);
    const handleBall = ()=>{
       if(BallCount < 5) {
        setBallCount(BallCount+1);
       }else{
        steOver(Over + 1);
        setBallCount();
       }
    };





    return(
        <div>
            <h2>Blower: Sakib</h2>
            <h3>Over: {Over}</h3>
            <h4>Ball:{BallCount}</h4>

            <button onClick={handleBall}>Add Ball</button>
        </div>
    )
 }