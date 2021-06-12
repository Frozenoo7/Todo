import React from 'react'
import Title from './Title'
import TodoContainer from './TodoContainer'

function Todo({deleteAllData,setdeleteAllData,setdeleteId,deleteData,setdeleteData, tasks, modal, setModal, todoData, settodoData, setStatus, filteredTodo, editModal, seteditModal, seteditId }) {
 
    return (
        <div className="todo">
            <Title />
            <TodoContainer deleteAllData={deleteAllData} setdeleteAllData={setdeleteAllData} setdeleteId={setdeleteId} deleteData={deleteData} setdeleteData={setdeleteData} tasks={tasks} modal={modal} setModal={setModal} todoData={todoData} settodoData={settodoData} setStatus={setStatus} filteredTodo={filteredTodo} editModal={editModal} seteditModal={seteditModal} seteditId={seteditId} />
        </div>
    )
}

export default Todo
