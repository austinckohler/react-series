import React, { Component } from "react";
import TodoList from "./components/TodoList";
import "./App.css";

export class App extends Component {
  state = {
    todos: [],
  };

  componentDidMount() {
    fetch("http://localhost:3000/api/v1/todos")
      .then((response) => response.json())
      .then((todos) => this.setState({ todos }));
  }

  render() {
    return (
      <div className="container">
        <h1>HIII</h1>
        <TodoList key={this.state.todos.id} todos={this.state.todos} />
      </div>
    );
  }
}

export default App;
