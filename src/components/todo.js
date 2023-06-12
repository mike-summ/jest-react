import React from "react";

function todo({ todo }) {
  const { id, title, completed } = todo;
  const h1 = <h1>{title}</h1>;
  const text = completed ? <strike>{h1}</strike> : h1;

  const render = <div data-testid={`todo-${id}`}>{text}</div>;

  return render;
}

export default todo;
