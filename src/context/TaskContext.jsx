import { createContext, useState, useEffect } from "react";
import { tasks as data } from "../data/tasks";

export const TaskContext = createContext();

export function TaskContextProvider(props) {
  const [tasks, setTasks] = useState([]);
  //estado que declara un array vacio

  function createTask(task) {
    setTasks([
      ...tasks,
      {
        title: task.title,
        id: tasks.length,
        description: task.description,
      },
    ]);
  }
  //funcion para crear una tarea nueva

  function deleteTask(taskId) {
    setTasks(tasks.filter((task) => task.id !== taskId));
  }
  //funcion que borra una tarea

  useEffect(() => {
    setTasks(data);
  }, []);
  //estado que llama el array una sola vez que carga el componente app

  return (
    <TaskContext.Provider
      value={{
        tasks,
        deleteTask,
        createTask,
      }}
    >
      {props.children}
    </TaskContext.Provider>
  );
}
