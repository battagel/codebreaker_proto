import React from 'react'
import './../css/Modal.css'

export default function Modal({ modal, newGame }) {

    function handleButton(e) {
        newGame()
    }

    return (
        <div className="ModalBackground">
            <div className="ModalContainer">
                <div className="ModalHeader">
                    <div className="ModalTitle">
                        <h1>{modal.title}</h1>
                    </div>
                </div>
                <div className="ModalBody">
                    <p>{modal.body}</p>
                </div>
                <div className="ModalFooter">
                    <button className="ModelButton" onClick={handleButton}>{modal.footer}</button>
                </div>
            </div>
        </div>
    )
}
