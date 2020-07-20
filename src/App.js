import React from 'react';
import './App.scss';
import TaskList from './Components/TaskList';
import TaskForm from './Components/TaskForm';
import TaskListProvider from './ContextList/TaskListContext';
import Header from './Components/Header';
function App() {
  return (
    <div className='App'>
      <TaskListProvider>
        <div className='container'>
          <div className='app-wrapper'>
            <div className='main'>
              <Header />
              <TaskForm />
              <TaskList />
            </div>
          </div>
        </div>
      </TaskListProvider>
    </div>
  );
}

export default App;
