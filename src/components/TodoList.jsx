import React, { Component } from 'react'

export default class TodoList extends Component {
  render() {
    return (
      <div>
        TodoList
        <br />
        {this.props.todoItems}
        <br />

      </div>
    )
  }
}
