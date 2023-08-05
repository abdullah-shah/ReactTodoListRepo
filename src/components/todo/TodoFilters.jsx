import React from 'react'

const TodoFilters = ({todosLeft, handleFilter,clearComplete}) => {
    const filterTextToSend = (text) => {
        handleFilter(text);

    }
  return (
    <div id='todosLeftSection'>
                <h3>Todos Left: {todosLeft}</h3> 
                <div id='filterSection' style={{margin:'0px 5px' }}>
                    <button onClick={()=>filterTextToSend('all')}>Show All</button>
                    <button onClick={()=>filterTextToSend('active')}>Active</button>
                    <button onClick={()=>filterTextToSend('completed')}>Completed</button>
                    <span 
                    style={{color:"orangered",margin:'8px 5px', cursor:'pointer'}}
                    onClick={clearComplete}
                    >Clear Complete</span>
                    
                </div>          
        </div>
  )
}

export default TodoFilters