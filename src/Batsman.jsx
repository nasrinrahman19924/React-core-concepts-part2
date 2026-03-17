import { useState } from "react"

export default function Batsman() {
    let [Runs, setRuns ] = useState(0);
 const handleSingle = () =>{
    const updatedRuns = Runs+1;
    setRuns(updatedRuns);
 }
 const handleSix = () =>{
    const updatedRuns = Runs+6;
    setRuns(updatedRuns);
 }
 const handleFour = () =>{
    const updatedRuns = Runs+4;
    setRuns(updatedRuns);
 }

    return (
        <div>
            <h3>Player: Bangla Batsman</h3>
            <h2>Score:{Runs} </h2>
            <button onClick={handleSingle}>singles</button>
            <button onClick={handleFour }>Four</button>
            <button onClick={handleSix}>Six</button>
        </div>
    )
}