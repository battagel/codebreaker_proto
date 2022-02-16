import React from 'react';
import GameContainer from './code-breaker/GameContainer';
import '../css/CodeBreaker.css';

export default function CodeBreaker({ data, prevGuess, newGame, toggleHidden, makeGuess}) {

    return (
        <div className="CodeBreaker">
            <GameContainer data={data} prevGuess={prevGuess} newGame={newGame} toggleHidden={toggleHidden} makeGuess={makeGuess}/>
        </div>
    )
}

// function CodeBreaker() {

    
//     const [currentCode, setCurrentCode] = useState(0);
//     const [currentColour_code, setCurrentColour_code] = useState("Loading");
//     const [currentRows, setCurrentRows] = useState("Loading");

//     useEffect(() => {
//         fetch('/api/home').then(result => result.json()).then(code => {
//         console.log("Payload recieved: " + code)
//         var rows = []
//         for (var digit = 0; digit < code.code.length; digit++) {
//             rows.push(
//                 <div className='Home-digit' style={{background: code.colour_code[digit]}}></div>
//             );
//         }

//         setCurrentRows(rows)
//         setCurrentCode(code.code);
//         setCurrentColour_code(code.colour_code)
//         });
//     }, []);


//     return (
//         <div className="Home-container middle">
//             <p>The current code is</p>
//             <div className='Home-digit-container middle'>
//                 {currentRows}
//             </div>
//         </div>
//     );
// }