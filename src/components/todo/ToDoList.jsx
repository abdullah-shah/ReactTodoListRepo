import React, {useState, useMemo} from 'react'
import TodoFilters from './TodoFilters';
import AddTodo from './AddTodo';
import ToDoItem from './ToDoItem';
import useId from '../../hooks/useId';


function ToDoList() {
    const [todos, setTodos] = useState([]);
    const [editTodoId, setEditTodoId] = useState([]);
    const [filter, setFilter] = useState('all');
    const [id, generatedId] = useId()
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
      generatedId();
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
    const handleEditTodoId = (id) => {
      setEditTodoId(id)
    }
    const handleTodoTextUpdate = (id, newText) =>{
      setTodos((previousTodos)=>
      previousTodos.map((todo)=>
      todo.id === id? {...todo, text: newText}: todo
      )
      )

    }
  
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
        <AddTodo 
        todoItem={todoItem}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
        isTodoTouched={isTodoTouched}
        />
        <ul > 
            {filteredTodos.map(todo=> (
              <ToDoItem 
              todo={todo}
              handleToggleComplete={()=>handleToggleComplete(todo.id)}
              deleteTodo={()=>deleteTodo(todo.id)}
              key={todo.id}
              handleEditTodoId={handleEditTodoId}
              handleTodoTextUpdate = {(e)=>handleTodoTextUpdate(todo.id, e.target.value)}
              editTodoId = {editTodoId}

              />                           
            ))}
        </ul>   
        
        <TodoFilters
        todosLeft={todosLeft}
        handleFilter={handleFilter}
        clearComplete={clearComplete}
        />     
        
    </>
  )
}

export default ToDoList