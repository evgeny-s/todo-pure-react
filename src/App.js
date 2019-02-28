import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import TodoFilter from './components/TodoFilter';
import TodoList from './components/TodoList';

const initialList = [
  {id: 1, name: 'Item cat 1', completed: false},
  {id: 2, name: 'Item dog 2', completed: true},
  {id: 3, name: 'Item cat dog map 3', completed: false},
];

class App extends Component {
  constructor() {
    super();

    this.state = {
      todoItems: initialList
    };

    this.onFilterChange = this.onFilterChange.bind(this);
    this.onItemComplete = this.onItemComplete.bind(this);
  }

  onFilterChange(e) {
    let newList = [];
    const value = e.target.value;
    if (!value) {
      newList = initialList;
    } else {
      this.state.todoItems.forEach((item) => {
        if (item.name.includes(value)) {
          newList.push(item);
        }
      });
    }

    this.setState({
      todoItems: newList,
    });
  }

  onItemComplete(id) {
    let newList = this.state.todoItems.slice();
    newList.forEach((item) => {
      if (item.id === id) {
        item.completed = true;
      }
    });

    this.setState({
      todoItems: newList,
    });
  }

  render() {
    return (
      <div className="container">
        <h1>This is a great TODO application!</h1>
        <TodoFilter onFilterChange={this.onFilterChange}/>
        <TodoList items={this.state.todoItems} onItemComplete={this.onItemComplete}/>
      </div>
    );
  }
}

export default App;
