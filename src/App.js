import './App.css';
import { useEffect, useState } from 'react';
import Header from './components/Header/main';
import Task from './components/Task_item/main';
const storage_Key = "todo:savedTasks";
function App() {
  const [tasks , setTasks] = useState([]);
  function loadSavedTasks(){
    const saved = localStorage.getItem(storage_Key)
    console.log(saved);
    if(saved){
      setTasks(JSON.parse(saved));
    }
  }
  useEffect(() => {
    loadSavedTasks();
  },[])
  function setTasksAndSave(newTasks){
    setTasks(newTasks);
    localStorage.setItem(storage_Key, JSON.stringify(newTasks));
  }
  function addTask(taskTitle) {
      setTasksAndSave([
        ...tasks,
          {
            id : crypto.randomUUID(),
            title : taskTitle,
            isCompleted: false
          }
      ]);
  }
  function deleteTaskById(taskId) {
    const newTasks = tasks.filter(task => task.id !== taskId);
    setTasksAndSave(newTasks);
  }
  function toggleTaskCompletedById (taskId){
    const newTasks = tasks.map (task => {
      if (task.id === taskId){
        return{
          ...task,
          isCompleted: !task.isCompleted
        }
      }
      return task;
    });
    setTasksAndSave(newTasks);
  }
 
 
  return (
    <> 
        <Header onAddTask={addTask} />
        <Task
         tasks ={tasks}
         onDelete={deleteTaskById}
         onComplete = {toggleTaskCompletedById}
         />
         
    </>
  )

}
export default App;
