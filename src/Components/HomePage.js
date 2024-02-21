import React, { useState } from "react";
import "../CSS/ToDoCard.css";
import { useDispatch, useSelector } from "react-redux";
import { updateTodo } from "../Redux/Slice/todoSlice";
import OneTask from "./OneTask";

const HomePage = () => {
 
  const todos = useSelector((state) => state.todo.dataTodo);
  const dispatch = useDispatch();
  
  return (
    <div className="allcard">
      {todos.map((todoItem) => (
        <div className="cardd" key={todoItem.id}>
        <OneTask  todoItem = {todoItem}  />
        </div>
      ))}
    </div>
  );
};

export default HomePage;
