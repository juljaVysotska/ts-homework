import { Route, Routes } from 'react-router';
import { MainLayout } from './shared/layouts/MainLayout';
import { TaskListPage } from './features/tasks/pages/TaskListPage';
import { TaskPage } from './features/tasks/pages/TaskPage';
import { CreateTaskPage } from './features/tasks/pages/CreateTaskPage';
import { AppRoutes } from './shared/types/router';

export const App = () => {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route index element={<h1 className="text-2xl font-bold mb-4">Task manager list</h1>} />
        <Route path={AppRoutes.TASK_LIST} element={<TaskListPage />} />
        <Route path={AppRoutes.TASK} element={<TaskPage />} />
        <Route path={AppRoutes.CREATE_TASK} element={<CreateTaskPage />} />
      </Route>
    </Routes>
  );
};
