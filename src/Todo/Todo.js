import React, { Component } from 'react'
import './Todo.css'


import { LuTrash2 } from "react-icons/lu";


import { MdDone } from "react-icons/md";

export default class Todo extends Component {

    removeClickHandler(id) {
        this.props.onRemove(id)
    }
    editClickHandler(id) {
        this.props.onEdit(id)
    }

    render() {
        return (

            <div className={`todo ${this.props.completed ? 'completed' : ''}`} style={{ display: 'flex' }}>
                <li className="todo-item">{this.props.title}</li>

                <MdDone className="check-btn" onClick={this.editClickHandler.bind(this, this.props.id)}></MdDone>



                <LuTrash2 className="trash-btn" onClick={this.removeClickHandler.bind(this, this.props.id)}></LuTrash2>

            </div>

        )
    }
}