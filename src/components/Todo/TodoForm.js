import React from 'react';
import { BiPlus } from 'react-icons/bi';

function TodoForm({tasks, modal, setModal,setStatus }) {
    const date = new Date();
    const currentDay = date.getDay();
    const currentDate = date.getDate();
    const currentMonth = date.getMonth();

    const months = ["Janauary", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    const day = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    
    const stateHandler = (e) => {
        setStatus(e.target.value);
    }
    return (
        <div className="todo-form">
            <div className="date">
                <span className="date-header">{day[currentDay]}, {currentDate} {months[currentMonth]}</span>
                <h4>{tasks} Tasks</h4>
            </div>
            <select onChange={stateHandler} className="form-select">
                <option value="all">All</option>
                <option value="completed">Completed</option>
                <option value="uncompleted">Uncompleted</option>
            </select>
            <button className="btn-plus" onClick={() => setModal(!modal)}>
                <BiPlus className="plus" />
            </button>
        </div>

    )
}

export default TodoForm
