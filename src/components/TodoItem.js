import React, { Component } from "react";
import { observer } from 'mobx-react';
import todoStore from "../stores/TodoStore";

@observer

class TodoItem extends Component {
    constructor(props) {
        super(props);
        this.handleDeleting = this.handleDeleting.bind(this);
    }
    handleDeleting() {
        todoStore.removeTodo(this.props.todo.id);
    }
    onToggle = () => {
        this.props.todo.toggle()
    }
    render() {
        const { todo } = this.props;
        return (
            <li className={todo.completed ? "completed" : ""}>
                <div className="view">
                    <input
                        onClick={this.onToggle}
                        type="checkbox"
                        className="toggle"
                        value="on"
                        checked={todo.completed} />
                    <label>{todo.title}</label>
                    <button className="destroy"
                        onClick={this.handleDeleting} />

                </div>
            </li>
        )
    }
}
export default TodoItem