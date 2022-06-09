import React from 'react';
import Header from './Header';
import List from './List';

export default function TodoList(props) {

    const {name,list} = props.data

    return(
        <div className='container'>
            <div className='row'>
                <div className='todolist'>
                    <Header name={name} />
                    <List list={list} />
                </div>
            </div>
        </div>
    )
}