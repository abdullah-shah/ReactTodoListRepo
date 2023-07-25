import React from 'react'

function ToDoItem({todo, handleToggleComplete, deleteTodo}) {
  return (
                <div style={{marginTop:5}}>
                        <input 
                        type="checkbox"
                        checked={todo.isComplete}
                        onChange={handleToggleComplete}
                        />
                        <li style={{display:"inline-block"}}>{todo.text}</li>
                        <span 
                        onClick={deleteTodo}
                        style={{padding:"0px 5px", margin:"0px 10px"}}
                        ><button style={{color:"red", fontWeight:"500", outline:'0px'}}>Delete</button></span>
                        
                </div> 
  )
}

export default ToDoItem