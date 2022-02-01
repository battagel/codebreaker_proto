import React, { useState, useEffect } from 'react';

function Home() {

    
    const [currentCode, setCurrentCode] = useState(0);
    const [currentColour_code, setCurrentColour_code] = useState("Loading");
    const [currentRows, setCurrentRows] = useState("Loading");

    useEffect(() => {
        fetch('/api/home').then(result => result.json()).then(data => {
        console.log("Payload recieved: " + data)
        var rows = []
        for (var digit = 0; digit < data.code.length; digit++) {
            rows.push(
                <div className='Home-digit' style={{background: data.colour_code[digit]}}></div>
            );
        }

        setCurrentRows(rows)
        setCurrentCode(data.code);
        setCurrentColour_code(data.colour_code)
        });
    }, []);


    return (
        <div className="Home-container middle">
            <p>The current code is</p>
            <div className='Home-digit-container middle'>
                {currentRows}
            </div>
        </div>
    );
}

export default Home;