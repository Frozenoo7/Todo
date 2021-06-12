import React from 'react'
import Button from './Button'

function Modal({ color,validate, inputData, title, btnTitle, submitTodo, close, formChange }) {




    return (
        <div className="modal">
            <div className="modal-content">
                <div className="modal-title">
                    <h3>Todo Task</h3>
                    <span className="close" onClick={close}>&times;</span>
                </div>
                <hr />
                <div className="form">
                    <form action="">
                        <div className="form-content">
                            <label htmlFor="">{title}</label>
                            <input type="text" name="tasks" value={inputData} className={color ? "form-control form-val-success" : "form-control form-val-error"} onChange={formChange} />
                            {
                                validate ? <span className="error">Please Enter Tasks</span> : null

                            }
                        </div>
                    </form>
                </div>

                <div className="modal-footer">
                    <Button title={btnTitle} color="#5cb85c" functionHandler={submitTodo} />
                    <Button title="Cancel" color="coral" functionHandler={close} />
                </div>
            </div>
        </div>
    )
}

export default Modal;
