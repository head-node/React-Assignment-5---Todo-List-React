import React, { useState } from "react";
const TodoList = (props) => {
  const [flag, setFlag] = useState(false);
  const [dt, setDt] = useState("");
  const handleEdit = () => {
    setFlag(!flag);
  };

  const handleEdition = (event) => {
    setDt(event.target.value);
  };
  return (
    <div className="deltext">
      {flag ? (
        <>
          <textarea id="task" onChange={handleEdition}></textarea>
          <button
            onClick={() => {
              props.updateItem(props.id, dt);
              setFlag(!flag);
            }}
          >
            Save
          </button>
        </>
      ) : (
        <>
          <li className="list" onClick={() => props.handleClick(props.id)}>
            {props.item}
          </li>
          <button className="edit" onClick={handleEdit}>
            edit
          </button>
          <button
            className="delete"
            onClick={() => {
              props.onSelect(props.id);
            }}
          >
            X
          </button>
        </>
      )}
    </div>
  );
};
export default TodoList;
