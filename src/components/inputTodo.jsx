import React from "react";
export const InputTodo = (props) => {
  const { todoText, onChange, onClick } = props;
  return (
    <div className="input-area">
      <input placeholder="insert ToDo" value={todoText} onChange={onChange} />
      <button onClick={onClick}>Add</button>
    </div>
  );
};
