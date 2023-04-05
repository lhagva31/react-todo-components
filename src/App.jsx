import React, { useState } from "react";
import "./styles.css";
import { InputTodo } from "./components/inputTodo";
import { IncompleteTodos } from "./components/IncompleteTodos";
import { CompleteTodos } from "./components/CompleteTodos";

export const App = () => {
  const [todoText, setTodoText] = useState("");
  const [incompleteToDos, setIncompleteToDos] = useState([]);

  const [completeToDos, setCompleteTodos] = useState([]);

  const onChangeTodoText = (event) => setTodoText(event.target.value);

  const onClickAdd = () => {
    if (todoText === "") return;
    const newTodos = [...incompleteToDos, todoText];
    setIncompleteToDos(newTodos);
    setTodoText("");
  };

  const onClickDelete = (index) => {
    const newTodos = [...incompleteToDos];
    newTodos.splice(index, 1);
    setIncompleteToDos(newTodos);
  };

  const onClickComplete = (index) => {
    const newIncompleteTodos = [...incompleteToDos];
    newIncompleteTodos.splice(index, 1);
    setIncompleteToDos(newIncompleteTodos);
    const newCompleteTodos = [...completeToDos, incompleteToDos[index]];
    setIncompleteToDos(newIncompleteTodos);
    setCompleteTodos(newCompleteTodos);
  };
  const onClickBack = (index) => {
    const newCompleteTodos = [...completeToDos];
    newCompleteTodos.splice(index, 1);

    const newIncompleteTodos = [...incompleteToDos, completeToDos[index]];
    setCompleteTodos(newCompleteTodos);
    setIncompleteToDos(newIncompleteTodos);
  };

  return (
    <>
      <InputTodo
        todoText={todoText}
        onChange={onChangeTodoText}
        onClick={onClickAdd}
      />
      <IncompleteTodos
        todos={incompleteToDos}
        onClickComplete={onClickComplete}
        onClickDelete={onClickDelete}
      />
      <CompleteTodos completeToDos={completeToDos} onClickBack={onClickBack} />
    </>
  );
};
