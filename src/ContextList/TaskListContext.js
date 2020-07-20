import React, { useState, createContext, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';
export const TaskListContext = createContext();

const TaskListProvider = (props) => {
  const initailState = JSON.parse(
    localStorage.getItem('tasks') || [{ title: 'hello', id: uuidv4() } || []]
  );
  const [tasks, setTasks] = useState(initailState);
  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  const [editItem, setEditItem] = useState(null);

  const addTask = (title) => setTasks([...tasks, { title, id: uuidv4() }]);

  const removeTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const clearAll = () => setTasks([]);

  const findItem = (id) => {
    const item = tasks.find((task) => task.id === id);
    setEditItem(item);
  };
  const editTask = (title, id) => {
    const items = tasks.map((task) => (task.id === id ? { title, id } : task));
    setTasks(items);
    setEditItem(null);
  };
  return (
    <TaskListContext.Provider
      value={{
        tasks,
        addTask,
        removeTask,
        clearAll,
        findItem,
        editTask,
        editItem,
      }}
    >
      {props.children}
    </TaskListContext.Provider>
  );
};

export default TaskListProvider;
