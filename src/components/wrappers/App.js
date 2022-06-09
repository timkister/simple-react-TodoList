import React from 'react';
import StateProvider from './StateProvider';
import TodoList from '../ui/TodoList';

class App extends React.Component {
    render() {
        return(
            <StateProvider>
                <TodoList />
            </StateProvider>
        )
    }
}

export default App;