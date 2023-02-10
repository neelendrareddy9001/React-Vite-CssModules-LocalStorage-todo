import styles from './header.module.css'
import todoLogo from '../../assets/todoLogo.svg';
import { AiOutlinePlusCircle } from 'react-icons/ai';
import { useState } from 'react';

export function Header () {
    const [title, setTitle] = useState({onAddTask});
    
    function handleSubmit (event)  {
        event.preventDefault();

        onAddTask(title);
    }

    function onChangeTitle (event) {
        setTitle(event.target.value);
    }
    
    return (
        <header className={styles.header}>
            <img src={todoLogo}/>

            <form className={styles.newTaskForm} onSubmit={handleSubmit}>
            <input placeholder='add a new task' type='text' onChange={onChangeTitle}/>
            <button>
                Create
                <AiOutlinePlusCircle size={20}/>
            </button>
        </form>
        </header>
    )
}
