import styles from './tasks.module.css'
import {Task} from '../Task'


export function Tasks ({tasks, onComplete}) {
    const taskQunatity = task.length;
    const completedTask = task.filter(tasks => tasks.isCompleted).length;
    
    return (
        <section className={styles.tasks}>
            <header className={styles.header}>
                <div>
                    <p>Create tasks</p>
                    <span>{taskQunatity}</span>
                </div>

                <div>
                    <p className={styles.textPurple}>Completed tasks</p>
                    <span>{completedTask} of {taskQunatity}</span>
                </div>
            </header>

            <div className={styles.list}>
                {tasks.map(task => (
                    <Task key={task.id} task={task} onComplete={onComplete}/>
                ))}
            </div>
        </section>
    )
}
