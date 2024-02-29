import {useState } from 'react';
import Logo from '../../images/Logo.png';
import styles from './Header.module.css';
const Header = ({onAddTask}) =>{
  const[title,setTitle]= useState('');
  function handleSubmit(event){
    event.preventDefault();
    onAddTask(title)
    setTitle('');
  }
  function onChangeTitle(event){
     setTitle(event.target.value);
  }

    return (
         <header className={styles.Header} >
            <img src={Logo} alt="logo"/>
            <form onSubmit={handleSubmit} className={styles.newTaskForm}>
               <input placeholder="Add a new task" type="text" value ={title} onChange={onChangeTitle}/>
               <button>
                 Add 
               </button>
            </form>
        </header>
    )
}
export default Header;