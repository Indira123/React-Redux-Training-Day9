import React, { Component } from 'react';
import Form from './Form';
import List from './List';

class TodoList extends Component {
    state = {}
    render() {
        return (
            <div className='container'>
                <div className='row'>
                    <div className='col-md-5'>
                        <Form />
                    </div>
                    <div className='col-md-6'>
                        <List />
                    </div>
                </div>
            </div>
        );
    }
}

export default TodoList;