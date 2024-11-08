import { DeleteOutline, EditNotifications } from '@mui/icons-material'
import { Button } from '@mui/material'
import React, { useState } from 'react'
const TodoApp = () => {
  const [TodoData, setTodoData] = useState(
    {
      inputdata: "",
      inputStore: [{ id: 0, value: "Defalut Todo 😊❤️" }],
      isSubmit: false,
    })

  const onchangeHandler = (event) => {
    const NewTodo = { ...TodoData }
    NewTodo.inputdata = event.target.value;
    setTodoData(NewTodo)
  }

  const AddData = () => {
    const NewTodo = { ...TodoData }
    if (NewTodo.inputdata === "") {
      return NewTodo;
    }
    let isSame;
    for (let ind = 0; ind < NewTodo.inputStore.length; ind++) {
      const element = NewTodo.inputStore[ind].value;
      if (NewTodo.inputdata === element?.toLowerCase()) {
        isSame = true;
      }
    }
    if (isSame) {
      alert("Todo has already taken!!")
      NewTodo.inputdata = ""
      setTodoData(NewTodo)
    }
    else {
      NewTodo.inputStore.push({ id: NewTodo.inputStore.length, value: NewTodo.inputdata })
      NewTodo.inputdata = ""
      setTodoData(NewTodo)
    }
  }

  const EditTodo = (event, index) => {
    event.preventDefault();
    const value = TodoData.inputStore[index].value
    setTodoData((prevData) => {
      const newData = [...prevData.inputStore];
      newData.splice(index, 1)
      return {
        ...newData,
        inputdata: value, inputStore: newData
      }
    })

  }
  const DeleteTodo = (index) => {
    const newData = { ...TodoData }
    newData.inputStore.splice(index, 1)
    setTodoData(newData)
    alert("Deleted succussfully!!!")
  }
  return (
    <>
      <h1>Todo List</h1>
      <div className='container'>
        <div className='row my-3'>
          <div className='col-md-10 mb-2'>
            <input type="text"
              className='form-control'
              placeholder='Add Todo..'
              value={TodoData.inputdata} onChange={onchangeHandler} />
          </div>
          <div className='col-md-2 text-end'>
            <Button variant='contained'
              sx={{ textTransform: "none" }}
              color='info'
              onClick={AddData} > + Add</Button>
          </div>
        </div>
        {TodoData.inputStore.map((item, index) => {
          return (
            <>
              <div className='row p-2 m-auto '>
                <div className="col-md-8 p-2 border my-2 "
                  style={{ backgroundColor: "white", borderRadius: "5px" }}
                >
                  <span>{item.value}</span>
                </div>
                <div className='col-md-4 ps-4 m-1'>
                  <div className='row'>
                    <Button
                      variant='contained'
                      color='inherit'
                      className='col-4 mx-2'
                      sx={{ textTransform: "none" }}
                      onClick={(event) => EditTodo(event, index)}
                    >
                      ✏️ Edit
                    </Button>
                    <Button variant='contained'
                      color='error'
                      className='col-4'
                      sx={{ textTransform: "none" }}
                      onClick={() => DeleteTodo(index)}
                    >
                      ❌ Delete
                    </Button>
                  </div>
                </div>
                <div>
                </div>
              </div >
            </>
          )
        })}
      </div >
    </ >
  )
}
export default TodoApp