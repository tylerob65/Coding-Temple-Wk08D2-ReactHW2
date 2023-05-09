import React from 'react'
import TodoItem from './TodoItem';

export default function TodoList({ todoListItems, toggleTodoItem }) {
    return (
        <div>
            <br />
            {todoListItems.map(([todoItemText, todoStatus], todoIndex) => {
                return (
                    <TodoItem
                        key={todoIndex}
                        todoItemText={todoItemText}
                        todoStatus={todoStatus}
                        todoIndex={todoIndex}
                        toggleTodoItem={toggleTodoItem}
                    />
                )
            })}
            <br />
        </div>
    )
}
