import { Route, Routes } from 'react-router';
import { TaskPage } from './features/tasks/pages/TaskPage';
import { TaskListPage } from './features/tasks/pages/TaskListPage';

export const routes = () => {
    return <Routes>
        <Route index element={<TaskListPage />} />
        <Route path="task" element={<TaskListPage />} >
            <Route path='/:id' element={<TaskPage />} />
        </Route>
    </Routes>;
};