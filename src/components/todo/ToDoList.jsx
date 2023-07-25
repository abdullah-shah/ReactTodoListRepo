import React, {useState, useMemo} from 'react'
import ToDoItem from './ToDoItem';


function ToDoList() {
    const [todos, setTodos] = useState([]);
    const [filter, setFilter] = useState('all');
    const [todoItem, setTodoItem] = useState({
      id: 0,
      text: '',
      isComplete: false
    });
  
    const handleChange = (event) => {
      const text = event.target.value;
      setTodoItem({ ...todoItem, text });
    };
  
    const handleSubmit = (event) => {
      event.preventDefault();
      const id = todos.length + 1;
      const isComplete = false;
      setTodos([...todos, { ...todoItem, id, isComplete }]);
      setTodoItem({ text: '' });
    };
  
    const deleteTodo = (id) => {
      setTodos(todos.filter((todo) => todo.id !== id));
    };
    const clearComplete = ()=>{
        setTodos(todos.filter(item=> !item.isComplete))
    }
  
    const handleToggleComplete = (id) => {
      setTodos((previousTodos) =>
        previousTodos.map((todo) =>
          todo.id === id ? { ...todo, isComplete: !todo.isComplete } : todo
        )
      );
    };
  
    const handleFilter = (filterCriteria) => {
      setFilter(filterCriteria);
    };
  
    // Memo Vars
    const isTodoTouched = useMemo(() => todoItem.text.trim() !== '', [todoItem.text]);
    const filteredTodos = useMemo(() => {
      if (filter === 'all') {
        return todos;
      } else if (filter === 'active') {
        return todos.filter((item) => !item.isComplete);
      } else if (filter === 'completed') {
        return todos.filter((item) => item.isComplete);
      }
    }, [filter, todos]);
  
    const todosLeft = useMemo(() => todos.filter((item) => !item.isComplete).length, [todos]);
    
  return (
    <>
        <h1 style={{textAlign:'center', background:"#f0f0f0"}}>Todo List</h1>
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
        <div id="allTodos">
            <ul > 
                {filteredTodos.map(todo=> (
                  <ToDoItem 
                  todo={todo}
                  handleToggleComplete={()=>handleToggleComplete(todo.id)}
                  deleteTodo={()=>deleteTodo(todo.id)}
                  key={todo.id}
                  />
                                      
                ))}
            </ul>
            
            
        </div>
        <div id='todosLeftSection'>
                <h3>Todos Left: {todosLeft}</h3> 
                <div id='filterSection' style={{display:"flex", margin:'0px 5px' }}>
                    <button onClick={()=>handleFilter('all')}>Show All</button>
                    <button onClick={()=>handleFilter('active')}>Active</button>
                    <button onClick={()=>handleFilter('completed')}>Completed</button>
                    <span 
                    style={{color:"orangered",margin:'8px 5px', cursor:'pointer'}}
                    onClick={clearComplete}
                    >Clear Complete</span>
                    
                </div>          
                {
                filteredTodos.map(item=>
                    <div key={item.id}>
                        <pre>{item.text}, {item.isComplete.toString()}</pre>
                        </div>
                    
                )}
            </div>
    </>
  )
}

export default ToDoList