import React from "react";

export const InCompleteTodos = (props) => {
  const { incompleteTodos, onclickComplete, onclickDelete } = props;
  return (
    <div className="incomplete-area">
      <p className="title">未完了のTODO</p>
      <ul>
        {incompleteTodos.map((todo, index) => {
          return (
            <div key={todo} className="list-row">
              <li>{todo}</li>
              <button onClick={() => onclickComplete(index)}>完了</button>
              <button onClick={() => onclickDelete(index)}>削除</button>
            </div>
          );
        })}
      </ul>
    </div>
  );
};
