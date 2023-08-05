import React from 'react'

const ReadonlyTodo = ({todoText}) => {
  return (
    <>
    <li 
        style={{display:"inline-block"}}
        >{todoText}</li>
    </>
  )
}

export default ReadonlyTodo