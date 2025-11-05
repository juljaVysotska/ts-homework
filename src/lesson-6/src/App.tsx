import { useState } from 'react';
// import { CreateTaskForm } from './components/CreateTaskForm';
// import { TaskList } from './components/TaskList';
import { Outlet } from 'react-router';
import { CreateTaskForm } from './features/tasks/components/CreateTaskForm';
// import { TaskList } from './features/tasks/components/TaskList';

export const App = () => {
  const [isFormVisible, setFromVisible] = useState(false);

  return (
    <div className=' space-y-4 '>
      <h1 className='text-3xl font-extrabold text-center'>Task manager</h1>
      <button
        type='submit'
        className='w-full bg-blue-600 hover:bg-blue-700  text-white font-semibold px-4 py-2 rounded-lg shadow-md'
        onClick={() => setFromVisible(!isFormVisible)}
      >
        {!isFormVisible ? 'Create Task' : 'Close form'}
      </button>

      {isFormVisible && <CreateTaskForm />}
      {/* <TaskList /> */}
      {/* <Outlet /> */}
    </div>
  );
};
