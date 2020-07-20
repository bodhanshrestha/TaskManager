import React, { useContext } from 'react';
import { TaskListContext } from '../ContextList/TaskListContext';

const Task = ({ task }) => {
  const { removeTask, findItem } = useContext(TaskListContext);
  const Capatilize = (word) => {
    let capital = word[0].toUpperCase();
    let rest = word.slice(1);
    return capital + rest;
  };
  return (
    <li className='list-item' key={task.id}>
      <div className='list_item_title'>{Capatilize(task.title)}</div>
      <div className='btn-actions'>
        <button className='btn btn-delete' onClick={() => removeTask(task.id)}>
          <i className='fa fa-trash' aria-hidden='true'></i>
        </button>
        <button className='btn btn-edit' onClick={() => findItem(task.id)}>
          <i className='fa fa-pencil' aria-hidden='true'></i>
        </button>
      </div>
    </li>
  );
};

export default Task;
