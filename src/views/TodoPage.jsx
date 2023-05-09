import React, { useState } from 'react'
import { TextField, Button } from '@mui/material';
import TodoList from '../components/TodoList';
import { Container } from '@mui/material';

export default function TodoPage() {

    const [todoInputText, setTodoInputText] = useState("")
    const [todoListItems, setTodoListItems] = useState([])


    const handleChange = (e) => {
        setTodoInputText(e.target.value)
    }

    const toggleTodoItem = (i) => {
        const newTodoItemsList = []

        todoListItems.forEach((items, index) => {
            // console.log(items, index, i)
            if (index !== i) {
                newTodoItemsList.push(items);
            } else {
                newTodoItemsList.push([items[0], !items[1]])
            }
        })
        setTodoListItems(newTodoItemsList)
    }

    const clearCompleteTodos = () => {
        const newTodoList = []
        todoListItems.forEach((items) => {
            if (!items[1]) {
                newTodoList.push(items)
            }
        }
        )
        setTodoListItems(newTodoList)
    }

    const resetTodoList = () => {
        setTodoListItems([])
    }

    const addToTodoListItems = (e) => {
        let newTodoListItems = []
        for (let i = 0; i < todoListItems.length; i++) {
            newTodoListItems.push(todoListItems[i])
        }

        newTodoListItems.push([e.target[0].value, false])
        setTodoListItems(newTodoListItems)
    }

    return (
        // <div className='side-margin'>
        <Container>
            <br />
            <h1>Todo List</h1>

            <TodoList
                todoListItems={todoListItems}
                toggleTodoItem={toggleTodoItem}
            />
            <br />
            <form style={{ display: 'flex', justifyContent: "start", alignItems: 'start', flexDirection: 'column' }}
                onSubmit={(e) => {
                    e.preventDefault()
                    addToTodoListItems(e)
                }}>
                <TextField
                    variant='outlined'
                    label='Enter Todo'
                    sx={{ width: '400px' }}
                    value={todoInputText}
                    onChange={handleChange}
                />
                <br />
                <Button
                    variant='outlined'
                    type='submit'
                >
                    Add to Todo List
                </Button>
                <br />
                <Button
                    variant="outlined"
                    color="secondary"
                    onClick={clearCompleteTodos}
                >
                    Cleared Completed Todos
                </Button>
                <br />
                <Button
                variant="outlined"
                color="error"
                onClick={resetTodoList}
                >
                    Clear All Todos
                </Button>
            </form>
            <br />
            <Container sx={{pl:0}}>
            </Container>
        </Container>
    )
}
