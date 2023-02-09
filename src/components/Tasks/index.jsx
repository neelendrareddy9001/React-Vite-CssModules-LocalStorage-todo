import styles from './tasks.module.css'
import {Task} from '../Task'


export function Tasks () {
    return (
        <section className={styles.tasks}>
            <header className={styles.header}>
                <div>
                    <p>Create tasks</p>
                    <span>10</span>
                </div>

                <div>
                    <p className={styles.textPurple}>Completed tasks</p>
                    <span>1 of 10</span>
                </div>
            </header>

            <div className={styles.list}>
                <Task/>
            </div>
        </section>
    )
}