export function TodoList({ todos, toggleTodo, deleteTodo }) {
    return (
        <div className="ui list">
            {todos.length === 0 && "No Todos"}
            {todos.map((todo, index) => {
                return (
                    <div className='item ui grid' key={todo.id}>
                        <div className="ui checkbox">
                            <input 
                                id={`item-${index}`} 
                                type="checkbox" 
                                name={`item-${index}`} 
                                checked={todo.completed} 
                                onChange={e => toggleTodo(todo.id, e.target.checked)} 
                            />
                            <label htmlFor={`item-${index}`}>{todo.title}</label>
                        </div>
                        <button 
                            onClick={() => deleteTodo(todo.id)} 
                            className="negative mini ui button">
                            Delete
                        </button>
                    </div>
                )
            })}
        </div>
    )
}