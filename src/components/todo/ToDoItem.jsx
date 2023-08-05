import React from 'react'
import EditableTodo  from './EditableTodo';
import ReadonlyTodo from './ReadonlyTodo';

const ToDoItem = ({todo, handleToggleComplete, deleteTodo, handleEditTodoId, editTodoId, handleTodoTextUpdate}) => {
    const editTodoIdOnBlur = (id) => {
        handleEditTodoId(id)
    };
    // Function to handle Enter key press
    const handleKeyPress = (e) => {
        if (e.key === 'Enter') {
        e.target.blur();
        }   
    };
  return (
                <div style={{marginTop:5, padding:'5px'}} >
                        <input
                        className='checkbox-round' 
                        type="checkbox"
                        checked={todo.isComplete}
                        onChange={handleToggleComplete}
                        />
                        {todo.id === editTodoId?
                            (
                                <EditableTodo
                                todoText = {todo.text}
                                handleTodoTextUpdate={handleTodoTextUpdate}
                                editTodoIdOnBlur={()=>editTodoIdOnBlur(null)}
                                handleKeyPress= {handleKeyPress}
                                />
                            ):
                            (
                                <ReadonlyTodo todoText={todo.text}/>
                            )
                        }   
                        <span
                        style={{marginLeft:10}} 
                        onClick={()=>editTodoIdOnBlur(todo.id)}>
                            <button style={{color:"orange", fontWeight:"500", outline:'0px'}}>Edit</button>
                        </span>
                        <span 
                        onClick={deleteTodo}>
                            <button style={{color:"red", fontWeight:"500", outline:'0px'}}>Delete</button>
                        </span>
                        
                </div> 
  )
}

export default ToDoItem