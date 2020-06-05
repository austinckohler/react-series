import React from "react";

function TodoItem(props) {
  const { title, content } = props;
  return todoListItems(title, content);

  function todoListItems(title, content) {
    return (
      <div>
        <h2>{title}</h2>
        <ul>
          <li>{content}</li>
        </ul>
      </div>
    );
  }
}

export default TodoItem;
