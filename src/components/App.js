import React from "react";
import "../styles/styles.css";
import TodoList from "./TodoList";

export default function App() {
  const [data, setData] = React.useState("");
  const [items, setItems] = React.useState([]);
  const listOfItems = () => {
    if (data.length > 0) {
      setItems((oldItems) => {
        //since the function usually deals with the default value, so here the parameter is the default value
        return [...oldItems, data]; // oldItems would be referring to the default variable, i.e is an array
      });
      setData("");
    }
  };
  const deleteItems = (id) => {
    setItems((oldItems) => {
      return oldItems.filter((arrElem, index) => {
        return index !== id;
      });
    });
  };
  const updateItem = (idx, value) => {
    if(value!==""){
    items[idx] = value;
    setItems([...items]);
  }
};

  const handleClick = (id) => {
    console.log(id);
  };

  return (
    <>
      <div className="main">
        <div className="center_div">
          <br />
          <h1>TODO LIST</h1>
          <br />
          <div className="inpb">
            <input
              type="text"
              value={data}
              placeholder="Add an Item"
              onChange={(event) => {
                setData(event.target.value);
              }}
            />
            <button className="btn" onClick={listOfItems}>
              +
            </button>
          </div>
          <ol>
            {items.map((item, index) => {
              return (
                <TodoList
                  key={index}
                  id={index}
                  item={item}
                  onSelect={deleteItems}
                  handleClick={handleClick}
                  updateItem={updateItem}
                />
              );
            })}
          </ol>
        </div>
      </div>
    </>
  );
}
