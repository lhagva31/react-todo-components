import React from "react";

export const CompleteTodos = (props) => {
  const { completeToDos, onClickBack } = props;
  return (
    <div className="complete-area">
      <p className="title"> Completed ToDo</p>
      <ul>
        {completeToDos.map((todo, index) => {
          return (
            <div key={todo} className="list-row">
              <li>{todo}</li>
              <button onClick={() => onClickBack(index)}>Back</button>
            </div>
          );
        })}
      </ul>
    </div>
  );
};
