import styles from './Tasks.module.css';
import { MdDelete } from "react-icons/md";
import {BsFillCheckCircleFill } from 'react-icons/bs';
const Tasks = ({task , onComplete , onDelete }) =>{
   return (
        <div className={styles.task}>
            <button className={styles.checkContainer} onClick={() => onComplete(task.id)}>
               {task.isCompleted ? <BsFillCheckCircleFill /> :<div />}
            </button>
            <p className={task.isCompleted ? styles.textCompleted:''}>{task.title}</p>
            <button className={styles.deleteButton} onClick={()=> onDelete(task.id)}>
               <MdDelete size ={20}/>
            </button>
        </div>

    );
} 
export default Tasks;