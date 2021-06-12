import React from 'react'
import TodoForm from './TodoForm'
import TodoLists from './TodoLists'
import Button from '../Button'


function TodoContainer({deleteAllData, setdeleteAllData,setdeleteId, deleteData, setdeleteData, tasks, modal, setModal, todoData, settodoData, setStatus, filteredTodo, editModal, seteditModal, seteditId }) {

  

    return (
        <div className="todo-container">
            <TodoForm tasks={tasks} modal={modal} setModal={setModal} setStatus={setStatus} />

            <hr />

            <div className="todo-items">


                {
                    tasks > 0 ? (
                        filteredTodo.map((todos) => (
                            <TodoLists
                                todos={todos}
                                todoData={todoData}
                                settodoData={settodoData}
                                text={todos.text}
                                key={todos.id}
                                editModal={editModal}
                                seteditModal={seteditModal}
                                seteditId={seteditId}
                                setdeleteId={setdeleteId}
                                deleteData={deleteData}
                                setdeleteData={setdeleteData}
                            />
                        ))
                    ) : (
                        <h1 className="no-tasks">No tasks</h1>
                    )


                }

            </div>
            {
                tasks > 0 ? (
                    <div className="delete-div">
                        <Button title="Delete All" color="coral" functionHandler={() => setdeleteAllData(!deleteAllData)} />
                    </div>
                ) : null
            }
        </div>
    )
}

export default TodoContainer
