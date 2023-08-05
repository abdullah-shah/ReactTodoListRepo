import React from 'react'

const EditableTodo = ({todoText,handleTodoTextUpdate,editTodoIdOnBlur,handleKeyPress }) => {
  return (
    <>
        <input 
                                type="text" 
                                value={todoText} 
                                onChange={handleTodoTextUpdate}
                                onBlur={()=>editTodoIdOnBlur(null)}
                                onKeyDown={handleKeyPress}
                                autoFocus
                                style={{outline:0, padding:'5px'}} />
    </>
  )
}
export default EditableTodo
