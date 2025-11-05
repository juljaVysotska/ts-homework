import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { App } from './App.tsx';
import { BrowserRouter, Outlet, Route, Routes } from "react-router";

import { Provider } from 'react-redux';
import { store } from './store/index.ts';
import { routes } from './router.tsx';
import { TaskListPage } from './features/tasks/pages/TaskListPage.tsx';
import { TaskPage } from './features/tasks/pages/TaskPage.tsx';
import { CreateTaskPage } from './features/tasks/pages/CreateTaskPage.tsx';
import { MainLayout } from './shared/layouts/MainLayout.tsx';

createRoot(document.getElementById('root')!).render(
  <StrictMode>

    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route element={<MainLayout />}>
            <Route index element={<p>Hellp</p>} />
            <Route path='/task' element={<TaskListPage />} />
            <Route path='/task/:id' element={<TaskPage />} />
            <Route path='/task/create' element={<CreateTaskPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </Provider>
  </StrictMode>,
);
