import React, { useContext } from 'react';
import { TaskListContext } from '../ContextList/TaskListContext';
import Task from './Task';

const Tasks = () => {
  const { tasks } = useContext(TaskListContext);
  return (
    <div className='task_List'>
      {tasks.length > 0 ? (
        <ul className='list_Container'>
          {tasks.map((task) => {
            return (
              <div key={task.id}>
                <Task task={task} />
              </div>
            );
          })}
        </ul>
      ) : (
        <h1 style={{ marginTop: '40px', fontWeight: '500' }}>No Tasks</h1>
      )}
    </div>
  );
};

export default Tasks;
