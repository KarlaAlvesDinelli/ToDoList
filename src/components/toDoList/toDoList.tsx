import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import React, { useState, useEffect } from "react";
import {
  TaskInput,
  AddButton,
  TaskList,
  TaskItem,
  TaskCheckbox,
  RemoveButton,
  FilterButton,
} from "./styled";

const TodoList: React.FC = () => {
  const [tasks, setTasks] = useState<{ text: string; completed: boolean }[]>(
    []
  );
  const [newTask, setNewTask] = useState<string>("");
  const [filter, setFilter] = useState<"all" | "completed" | "open">("all");
  const [totalTasks, setTotalTasks] = useState<number>(0);
  const [completedTasks, setCompletedTasks] = useState<number>(0);
  const [openTasks, setOpenTasks] = useState<number>(0);

  useEffect(() => {
    const totalTasksCount = tasks.length;
    const completedTasksCount = tasks.filter((task) => task.completed).length;
    const openTasksCount = tasks.filter((task) => !task.completed).length;

    setTotalTasks(totalTasksCount);
    setCompletedTasks(completedTasksCount);
    setOpenTasks(openTasksCount);
  }, [tasks]);

  const addTask = () => {
    if (newTask.trim() !== "") {
      setTasks([...tasks, { text: newTask, completed: false }]);
      setNewTask("");
      toast("Tarefa adicionada!", {
        type: toast.TYPE.INFO,
        autoClose: 3000,
      });
    }
  };

  const toggleTaskCompletion = (index: number) => {
    const updatedTasks = [...tasks];
    filteredTasks[index].completed = !filteredTasks[index].completed;
    console.log("!!!", index);
    setTasks(updatedTasks);
    toast("Tarefa concluída!", {
      type: toast.TYPE.SUCCESS,
      autoClose: 3000,
    });
  };

  const removeTask = (index: number) => {
    const updatedTasks = [...tasks];
    updatedTasks.splice(index, 1);
    setTasks(updatedTasks);
    toast("Tarefa removida!", {
      type: toast.TYPE.ERROR,
      autoClose: 3000,
    });
  };

  const filteredTasks = tasks.filter((task) => {
    if (filter === "completed") {
      return task.completed;
    } else if (filter === "open") {
      return !task.completed;
    } else {
      return true;
    }
  });

  console.log("???", tasks);

  return (
    <div className="appContainer">
      <h1>Lista de Tarefas</h1>
      <div className="newTask">
        <TaskInput
          type="text"
          placeholder="Nome da tarefa"
          value={newTask}
          onChange={(e) => {
            const inputValue = e.target.value;
            if (inputValue.length <= 20) {
              setNewTask(inputValue);
            }
          }}
          maxLength={20}
        />
        <AddButton onClick={addTask}>Adicionar</AddButton>
      </div>
      <div className="filter">
        <FilterButton onClick={() => setFilter("all")}>
          Todas ({totalTasks})
        </FilterButton>
        <FilterButton onClick={() => setFilter("completed")}>
          Concluídas ({completedTasks})
        </FilterButton>
        <FilterButton onClick={() => setFilter("open")}>
          Abertas ({openTasks})
        </FilterButton>
      </div>

      <TaskList>
        {filteredTasks.map((task, index) => (
          <TaskItem key={index} className={task.completed ? "completed" : ""}>
            <div>
              <TaskCheckbox
                type="checkbox"
                checked={task.completed}
                onChange={() => toggleTaskCompletion(index)}
              />
              {task.text}
            </div>
            <div>
              {!task.completed && (
                <RemoveButton onClick={() => removeTask(index)}>
                  Remover
                </RemoveButton>
              )}
            </div>
          </TaskItem>
        ))}
      </TaskList>
    </div>
  );
};

export default TodoList;
