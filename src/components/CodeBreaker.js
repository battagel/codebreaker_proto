import React from 'react';
import GameContainer from './code-breaker/GameContainer';
import '../css/CodeBreaker.css';

export const DataContext = React.createContext()
export const ColourMapContext = React.createContext()

export default function CodeBreaker({ data, game_funcs}) {

    const colour_map = {
		0: "Hidden",
		1: "A",
		2: "B",
		3: "C",
		4: "D",
		5: "E",
		6: "F",
		7: "G",
		8: "H",
		9: "Empty",
		10: "Mini Black",
		11: "Mini White",
		12: "Mini Empty"
	}

    return (
        <div className="CodeBreaker">
            <ColourMapContext.Provider value={colour_map}>
                <DataContext.Provider value={data}>
                    <GameContainer {...game_funcs} />
                </DataContext.Provider>
            </ColourMapContext.Provider>
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