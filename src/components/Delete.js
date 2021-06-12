import React from 'react'
import Button from './Button'

function Modal({ btnTitle, deleteHandler, close, deleteDataId, }) {






    return (
        <div className="modal">
            <div className="modal-content delete-modal">
                <div className="modal-title">
                    <span>Are you sure you want to delete this taks</span>
                    <span className="close" onClick={close}>&times;</span>
                </div>
                <hr />
                <div className="form">
                    <div className="form-content">
                    <ul className="delete-list">
                        {
                            deleteDataId.map((elem) => {
                                return (
                                    
                                        <li className="delete-list-items" key={elem.id}>{elem.text}</li>
                                   
                                )
                            })
                        }
                        </ul>
                    </div>
                </div>

                <div className="modal-footer">
                    <Button title={btnTitle} color="#5cb85c" functionHandler={deleteHandler} />
                    <Button title="Cancel" color="coral" functionHandler={close} />
                </div>
            </div>
        </div>
    )
}

export default Modal;
