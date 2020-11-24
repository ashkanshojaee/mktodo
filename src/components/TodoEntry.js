import React, { Component } from "react";
import todoStore from '../stores/TodoStore';
import {observer} from 'mobx-react';

@observer

class TodoEntry extends Component {
    state = {
        value:''
    };
    handlekeyDown = event =>{
        if(event.keyCode!==13){
        return;
        }
        todoStore.addTodo(this.state.value)
        this.setState({
            value:''
        })
    }
    render() {
        return (
            <header>
                <h1>Todo 2020</h1>
                
                <input 
                value={this.state.value}
                onChange={
                    event=>this.setState({value:event.target.value})
                }
                onKeyDown={
                    event => this.handlekeyDown(event)
                }
                type="text" 
                className="new-todo" 
                placeholder="What needs to be done?" />
                
            </header>
        )
    }
}
export default TodoEntry
