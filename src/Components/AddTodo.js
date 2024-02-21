import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addTodo } from '../Redux/Slice/todoSlice'

const AddTodo = () => {
    const [newTodo, setNewTodo] = useState ({
        id: Math.random(),
        title : "",
        done: false
    })
    const dispatch = useDispatch()
    const handleAdd = ()=>{
        dispatch(addTodo(newTodo))
        setNewTodo({
            id: Math.random(),
            title : "",
            done: false
        })
    }
  return (
    <div>
      <input type="text" className='input' placeholder='add new task' value={newTodo.title} name='title' onChange={(event)=>setNewTodo({...newTodo, title: event.target.value})} />
      <button type="submit" onClick={handleAdd}  className='add' >Add </button>
    </div>
  )
}

export default AddTodo
