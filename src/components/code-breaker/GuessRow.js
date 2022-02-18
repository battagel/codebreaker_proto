import React from 'react';
import Peg from './Peg.js';
import { v4 as uuidv4 } from 'uuid';
import './../../css/CodeBreaker.css';

export default function GuessRow({ row }) {
  return (
        <tr className="GuessRow">
            <td className="PegAnswerContainer">
                {
                    row[0].map(value => {
                        return (
                            <Peg key={uuidv4()} value={value}/>
                        )
                    })
                }
            </td>
            <td className="PrevAnswerContainer">
                {
                    row[1].map(value => {
                        return (
                            <Peg key={uuidv4()} value={value}/>
                        )
                    })
                }
            </td>
        </tr>
    )
}
