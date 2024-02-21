import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { deleteTodo, updateTodo } from '../Redux/Slice/todoSlice';

const OneTask = ({todoItem}) => {
    const [show, setShow] = useState(false);
    const [newTitle, setNewTitle] = useState("")
    const dispatch = useDispatch();
    const handleUpdate = (todo) => {
        dispatch(updateTodo({ ...todo, done: !todo.done }));
      };
      const updateTodoTitle = (todo)=>{
        dispatch(updateTodo({ ...todo, title: newTitle }));
        setShow(!show)
      }
  return (
    <>
        <input
            type="checkbox"
            name="done"
            onClick={() => handleUpdate(todoItem)}
          />
          {!show ? (
            <>
              <h4
                className="titleOfTask"
                onDoubleClick={() => setShow(!show)}
                style={
                  todoItem.done ? { textDecoration: "line-through" } : null
                }
              >
                {" "}
                {todoItem.title}{" "}
              </h4>
              <button
                className="btn"
                onClick={() => dispatch(deleteTodo(todoItem.id))}
              >
                {" "}
                delete{" "}
              </button>
            </>
          ) : (
            <>
              <input type="text"  onChange={(e)=>setNewTitle(e.target.value)} />
              <button onClick={()=>updateTodoTitle(todoItem)}  > update </button>
            </>
          )}
    </>
  )
}

export default OneTask
