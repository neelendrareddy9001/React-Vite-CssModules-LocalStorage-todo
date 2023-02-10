import styles from './task.module.css'
import {TbTrash} from 'react-icons/tb'

export function Task ({task, onComplete, onDelete}) {
    return (
        <div className={styles.task}>
            <button className={styles.checkContainer} onClick={() => onComplete(task.id)}>
                {task.isCompleted ? <BsFillCheckCircle/> : <div/>}
                
            </button>

            <p>
              <p className={task.isCompleted ? styles.textCompleted : ""}>{task.title}</p>   
            </p>

            <button className={styles.deleteButton} onClick={() => onDelete(task.id)}>
                <TbTrash size={20}/>
            </button>
        </div>

    )
}
