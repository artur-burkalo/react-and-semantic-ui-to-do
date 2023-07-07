import { Header } from 'semantic-ui-react';
import './styles.css';
import { useEffect, useState } from 'react';
import { TodoForm } from './TodoForm';
import { TodoList } from './TodoList';

export default function App() {
    
    const [todos, setTodos] = useState(() => {
        const localValue = localStorage.getItem("ITEMS")
        if(localValue == null) return []

        return JSON.parse(localValue)
    });

    useEffect(() => {
        localStorage.setItem("ITEMS", JSON.stringify(todos))
    }, [todos])

    function addTodo(newItem) {
        setTodos((currentTodos) => { 
            return [
                ...currentTodos, 
                { id: crypto.randomUUID(), title: newItem, completed: false }
            ]
        })

    }

    function toggleTodo(id, completed) {
        setTodos(currentTodos => {
            return currentTodos.map(todo => {
                if (todo.id == id) {
                    return {...todo, completed}
                }
                return todo;
            })
        })
    }

    function deleteTodo(id) {
        setTodos(currentTodos => {
            return currentTodos.filter(todo => todo.id != id);
        })
    };

    return (
        <>
            <div className="ui divider"></div>
            <div className="ui container">
                <TodoForm onSubmit={addTodo}/>
                <Header as="h3">Todo List</Header>
                <TodoList todos={todos} toggleTodo={toggleTodo} deleteTodo={deleteTodo} />
            </div>
        </>
    )
}