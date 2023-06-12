import { render, screen, cleanup } from "@testing-library/react";
import renderer from "react-test-renderer";
import Todo from "../todo";

afterEach(() => {
  cleanup();
});

// Renders a component and then tests if an element is rendering
test("should render completed component", () => {
  const todoItem = { id: 1, title: "Wash the dishes", completed: false };
  render(<Todo todo={todoItem} />);
  const todoElement = screen.getByTestId(`todo-1`);
  expect(todoElement).toBeInTheDocument();
  expect(todoElement).toHaveTextContent(`Wash the dishes`);
  expect(todoElement).not.toContainHTML(`<strike>`);
});

test("should render non-completed component", () => {
  const todoItem = { id: 2, title: "Do homework", completed: true };
  render(<Todo todo={todoItem} />);
  const todoElement = screen.getByTestId(`todo-2`);
  expect(todoElement).toBeInTheDocument();
  expect(todoElement).toHaveTextContent(`Do homework`);
  expect(todoElement).toContainHTML("</strike>");
});

test("matches snapshot", () => {
  const todoItem = { id: 2, title: "Do homework", completed: true };
  const tree = renderer.create(<Todo todo={todoItem} />).toJSON();
  expect(tree).toMatchSnapshot();
});
