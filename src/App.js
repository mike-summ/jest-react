import "./App.css";
import Todo from "./components/todo";

function App() {
  const todos = [
    { id: 1, title: "Wash the dishes", completed: false },
    { id: 2, title: "Do homework", completed: true },
  ];

  return (
    <div className="App">
      {todos.map((todo) => {
        return <Todo todo={todo} />;
      })}
    </div>
  );
}

export default App;
