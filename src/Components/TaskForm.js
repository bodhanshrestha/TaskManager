import React, { useState, useContext, useEffect } from 'react';
import { TaskListContext } from '../ContextList/TaskListContext';

const TaskForm = () => {
  const { addTask, clearAll, editTask, editItem } = useContext(TaskListContext);

  const [title, setTitle] = useState('');

  const handleChange = (e) => {
    setTitle(e.target.value);
    console.log(title);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (editItem === null) {
      addTask(title);
      setTitle('');
    } else {
      editTask(title, editItem.id);
    }
  };
  useEffect(() => {
    if (editItem !== null) {
      setTitle(editItem.title);
    } else {
      setTitle('');
    }
  }, [editItem]);

  return (
    <form onSubmit={handleSubmit} className='form'>
      <input
        type='text'
        onChange={handleChange}
        value={title}
        className='task-input'
        placeholder='Add Task....'
        required
      />
      <div className='buttons'>
        <button type='submit' className='btn btn-submit'>
          {editItem ? 'Edit Item' : ' Add Task'}
        </button>
        <button className='btn btn-clear' onClick={clearAll}>
          Clear
        </button>
      </div>
    </form>
  );
};

export default TaskForm;
