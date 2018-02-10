import React from 'react';
import ReactDOM from 'react-dom';
import DevTools from "mobx-react-devtools";

import TodoList from "./components/TodoList";
import TodoListModel from "./models/TodoListModel";
import TodoModel from "./models/TodoModel";

 class App extends React.Component {
    render() {
        
    const store = new TodoListModel();

    store.addTodo("Get Coffee");
    store.addTodo("Write simpler code");
    store.todos[0].finished = true;

    setTimeout(() => {
        store.addTodo("Get a cookie as well");
    }, 2000);

    // playing around in the console
    window.store = store;

        return (
            <div>
         
    <DevTools />
    <TodoList store={store} />
  </div>
           
        )
    }


}


class App1 extends React.Component {
    render() {
        return(
            <h1>gfdg</h1>
            
            )
    }
    
    
    
}
export default App;
