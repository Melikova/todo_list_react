import React, {useContext} from 'react'
import { DataContext } from './DataProvider'
import ListItem from './ListItem'

export default function List() {
  const [todos, setTodos] = useContext(DataContext);
  const checkComplete = id =>{
    const newTodos = [...todos];
    newTodos.forEach((todo, index)=>{
      if(index === id){
        todo.complete = !todo.complete;
      }
    })
    setTodos(newTodos);
  }

  const handleEditTodos = (editvalue, id)=>{
    const newTodos = [...todos];
    newTodos.forEach((todo, index)=>{
      if(index === id){
        todo.name = editvalue;
      }
    })
    setTodos(newTodos);
  }

  return (
    <ul>
        {todos.map((todo, index)=>(
          <ListItem todo={todo} key={index} id={index} checkComplete={checkComplete} handleEditTodos={handleEditTodos}/>
        ))}
    </ul>
  )
}
