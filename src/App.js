import React, { useState, useEffect } from 'react';
import Todo from './components/Todo/Todo';
import './style/Todo.css';
import Modal from './components/Modal';
import Delete from './components/Delete'

function App() {
  const getTodo = () => {
    let localData = localStorage.getItem('todoData');
    if (localData) {
      return JSON.parse(localStorage.getItem('todoData'));
    }
    else {
      return [];
    }
  }

  const [modal, setModal] = useState(false);
  const [editModal, seteditModal] = useState(false);

  const [inputData, setinputData] = useState("");

  const [color, setColor] = useState(false);
  const [validate, setValidate] = useState(false);

  const [todoData, settodoData] = useState(getTodo());
  const [status, setStatus] = useState("all");

  const [filteredTodo, setFilteredTodo] = useState([]);

  const [editId, seteditId] = useState("");
  // delete all

  const [deleteData, setdeleteData] = useState(false);

  const [deleteId, setdeleteId] = useState("");
  const [deleteAllData, setdeleteAllData] = useState(false);


  const filtereHandler = () => {
    switch (status) {
      case 'completed':
        setFilteredTodo(todoData.filter((todo) => todo.completed));
        break;
      case 'uncompleted':
        setFilteredTodo(todoData.filter((todo) => !todo.completed));
        break;
      default:
        setFilteredTodo(todoData);
    }
  }

  useEffect(() => {
    filtereHandler();
    saveTodo();
  }, [todoData, status]);



  const saveTodo = () => {
    localStorage.setItem('todoData', JSON.stringify(todoData));
  }


  // add data
  const formChange = (e) => {
    setinputData(e.target.value);

    if (e.target.value !== '') {
      setColor(true);

    }

  }

  const closeAdd = () => {
    setModal(!modal);
    setColor(false);
    setValidate(false);
    setinputData("");

  }

  const closeUpdate = () => {
    seteditModal(!editModal);
    setColor(false);
    setValidate(false);
    setinputData("");

  }
  // submit data

  const submitTodo = (e) => {
    e.preventDefault();
    if (inputData === '') {
      setColor(false);
      setValidate(true);
    }
    else {
      settodoData([
        ...todoData,
        {
          text: inputData,
          completed: false,
          id: Math.random() * 1000
        }
      ]);
      setinputData("");
      setModal(false);
      setColor(false);
      setValidate(false);


    }

  }

  // edit data

  const editOnchange = (e) => {
    setinputData(e.target.value);
    if (e.target.value !== '') {
      setColor(true);

    }

  }

  // count data in localstorage
  // const tasks=JSON.parse(localStorage.todoData).length;

  const storageLength = JSON.parse(localStorage.getItem('todoData'));
  let tasks;
  if (storageLength !== null) {
    tasks = storageLength.length;
  } else {
    tasks = 0;
  }


  const editData = (e) => {
    e.preventDefault();
    if (inputData === '') {
      setColor(false);
      setValidate(true);

    } else {
      settodoData(
        todoData.map((data) => {
          if (data.id === editId) {
            return {
              ...data,
              text: inputData
            }

          }
          return data;
        }));

      setinputData("");
      seteditModal(false);
      setColor(false);
      setValidate(false);

    }
  }

  const closeDelete=()=>{
    setdeleteData(!deleteData);
  }
const closeDeleteAll=()=>{
  setdeleteAllData(!deleteAllData);

}

  // delete individual data
  const deleteHandler = () => {
    settodoData(todoData.filter((todo) => todo.id !== deleteId));
    setdeleteData(false);
}

const deleteDataId = todoData.filter((data) => {
  return data.id === deleteId;
});

// delete all data



const deleteAll = () => {
  localStorage.clear();
  settodoData([]);
  setdeleteAllData(false);
}



  return (
    <div className="app">
      <Todo deleteAllData={deleteAllData} setdeleteAllData={setdeleteAllData} setdeleteId={setdeleteId} deleteData={deleteData} setdeleteData={setdeleteData} tasks={tasks} modal={modal} setModal={setModal} todoData={todoData} settodoData={settodoData} setStatus={setStatus} filteredTodo={filteredTodo} editModal={editModal} seteditModal={seteditModal} seteditId={seteditId} />


      {modal ? (
        <Modal color={color} validate={validate} inputData={inputData} title="New Tasks:" btnTitle="Add" formChange={formChange} close={closeAdd} submitTodo={submitTodo} />
      ) : null}

      {editModal ? (
        <Modal color={color} validate={validate} inputData={inputData} title="Update Tasks:" btnTitle="Update" formChange={editOnchange} close={closeUpdate} submitTodo={editData} />
      ) : null}

      {
        deleteData ? (
          <Delete deleteHandler={deleteHandler} deleteDataId={todoData} deleteDataId={deleteDataId} todoData={todoData} btnTitle="Delete" close={closeDelete}/>
        ) : null
      }
      {
        deleteAllData ? (
          <Delete deleteHandler={deleteAll}  deleteDataId={todoData} btnTitle="Delete All" close={closeDeleteAll}/>
        ) : null
      }

    </div>

  );
}

export default App;
