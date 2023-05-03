import React, { Component } from 'react'
import { TextField, Button } from '@mui/material';
import TodoList from '../components/TodoList';

export default class TodoPage extends Component {
	constructor() {
		super();
		this.state = {
			todoInputText: '',
			todoListItems: [],
		};
	}

	handleChange = (e) => {
		this.setState({ todoInputText: e.target.value })
		// console.log(e.target.value)
	}

	addToTodoListItems = (e) => {
		
		const newTodoListItems = [...this.state.todoListItems]
		
		// newTodoListItems.push({text:e.target[0].value,complete:false})
		newTodoListItems.push(e.target[0].value,false)
		this.setState({ todoListItems: newTodoListItems })
		console.log(this.state.todoListItems)
	}

	render() {
		return (
			<div className='side-margin'>
				<br />
				<h1>Todo List</h1>
				<TodoList todoItems={this.state.todoListItems}/>
				<br />
				<form action="" onSubmit={(e) => {
					e.preventDefault()
					console.log(e)
					this.addToTodoListItems(e)
				}}>	
					<TextField
						variant='outlined'
						label='Enter Todo'
						sx={{ width: '400px' }}
						value={this.state.todoInputText}
						onChange={this.handleChange}
					/>
					<Button variant='outlined' type='submit'>Hello</Button>
				</form>

				<br />
				hello
			</div>
		)
	}
}
