import React from 'react'

function AddTodo({todoItem, handleChange, handleSubmit, isTodoTouched}) {
  return (
    <>
    <h1 style={{textAlign:'center', background:"#f0f0f0"}}>Todo App</h1>
    <form noValidate>
            <label htmlFor="todoText">Add New Todo</label>
            <input
            id='todoText'
            value={todoItem.text}
            onChange={handleChange}
            >
            </input>
            <button 
            type='submit'
            disabled={!isTodoTouched}
            onClick={handleSubmit}  
            > Add Todo</button>
        </form>
    </>
  )
}

export default AddTodo