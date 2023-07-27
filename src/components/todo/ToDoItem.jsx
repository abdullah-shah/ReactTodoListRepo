import React from 'react'

function ToDoItem({todo, handleToggleComplete, deleteTodo, handleEditTodoId, editTodoId, handleTodoTextUpdate}) {
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
                <div style={{marginTop:5}} >
                        <input 
                        type="checkbox"
                        checked={todo.isComplete}
                        onChange={handleToggleComplete}
                        />
                        {todo.id === editTodoId?
                            (<input 
                                type="text" 
                                value={todo.text} 
                                onChange={handleTodoTextUpdate}
                                onBlur={()=>editTodoIdOnBlur(null)}
                                onKeyDown={handleKeyPress} />
                            ):
                            (<li 
                                style={{display:"inline-block"}}
                                >{todo.text}</li>
                            )
                        }   
                        <span 
                        onClick={()=>editTodoIdOnBlur(todo.id)}>
                            <button style={{color:"green", fontWeight:"500", outline:'0px'}}>Edit</button>
                        </span>
                        <span 
                        onClick={deleteTodo}>
                            <button style={{color:"red", fontWeight:"500", outline:'0px'}}>Delete</button>
                        </span>
                        
                </div> 
  )
}

export default ToDoItem