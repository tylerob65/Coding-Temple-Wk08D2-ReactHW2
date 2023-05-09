import React from 'react'
import CheckBoxIcon from '@mui/icons-material/CheckBox';
import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank';
import IconButton from '@mui/material/IconButton';

export default function TodoItem({ todoStatus, todoItemText, todoIndex, toggleTodoItem }) {
    return (
        <div style={{ display: 'flex', alignItems: 'center' }}>
            <IconButton onClick={() => { toggleTodoItem(todoIndex) }}>
                {(todoStatus) ?
                    <CheckBoxIcon color="primary" />
                    :
                    <CheckBoxOutlineBlankIcon />}
            </IconButton>
            <p style={{ margin: '0' }}>{todoItemText}</p>
        </div >
    )
}
