import TaskCard from "./TaskCard";
import { useContext } from "react";
import { TaskContext } from "../context/TaskContext";

function TaskList({}) {
  const { tasks } = useContext(TaskContext);

  if (tasks.length === 0) {
    return <h1 className="text-white text-4xl font-bold text-center">No hay tareas aun.</h1>;
  }
  //condicional que mostrará h1 si no hay tareas

  return (
    <div className="grid grid-cols-4 gap-2">
      {tasks.map((task) => (
        <TaskCard key={task.id} task={task} />
      ))}
    </div>
    //funcion .map() que recorre array
    //componente que mostrara en pantalla la tarea con su key
  );
}

export default TaskList;
