import React from 'react';
import { AiFillDelete } from 'react-icons/ai';
import { MdModeEdit } from 'react-icons/md';


function TodoLists({ deleteData,setdeleteData,setdeleteId,text, todos, todoData, settodoData,editModal,seteditModal,seteditId }) {

    
   

    const completeHandler = () => {
        settodoData(todoData.map((items) => {
            if (items.id === todos.id) {
                return {
                    ...items,
                    completed: !items.completed
                }
            }
            return items;
        }));
    }
  
    return (
        <>
            <div className="todo-lists">
                <div className="text">
                    <input type="checkbox" name="" id="" onClick={completeHandler} className="check-box"/>
                    <p className={`todo-text ${todos.completed ? "completed" : ""}`}>{text}</p>
                </div>
                <div className="btn">
                    <button className="edit" onClick={()=>{seteditModal(!editModal); seteditId(todos.id)}}><MdModeEdit /></button>
                    <button className="delete" onClick={()=>{setdeleteData(!deleteData);setdeleteId(todos.id)}}><AiFillDelete /></button>
                </div>
            </div>
        </>
    )
}

export default TodoLists
