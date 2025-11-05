import type { FC } from 'react';
import { Link, Outlet } from 'react-router';
import { AppRoutes } from '../types/router';

export const MainLayout: FC = () => {
    return <>
        <aside className="w-64 bg-white shadow-md p-4 flex flex-col">
            <h2 className="text-xl font-semibold mb-6">Menu</h2>
            <nav className="flex flex-col space-y-3">
                <Link to={AppRoutes.TASK_LIST}>Board</Link>
                <Link to={AppRoutes.CREATE_TASK}>Create task</Link>
            </nav>
        </aside>

        <main className="flex-1 p-8">
            <Outlet />
        </main>
    </>;
};