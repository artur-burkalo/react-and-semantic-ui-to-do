import { useState } from "react";

export function TodoForm ({ onSubmit }) {
    const [newItem, setNewItem] = useState('')

    function handleSubmit(e) {
        e.preventDefault();

        if(newItem == "") return ;
        
        onSubmit(newItem);
        setNewItem('');
    }

    return (
        <form onSubmit={handleSubmit} className="ui form">
            <div className="field">
                <label htmlFor="item" className='mb-5'>New Item</label>
                <input 
                    value={newItem} 
                    onChange={e => setNewItem(e.target.value)} 
                    id="item" 
                    type="text" 
                />
            </div>
            <button className='ui primary button mt-5'>Add</button>
        </form>
    )
}