import { Link, Outlet } from 'react-router';

export const MainLayout = () => {
    return <>
        <aside className="w-64 bg-white shadow-md p-4 flex flex-col">
            <h2 className="text-xl font-semibold mb-6">Menu</h2>
            <nav className="flex flex-col space-y-3">
                <Link to={'/task'}>Board</Link>
                <Link to={'/task/create'}>Create task</Link>
            </nav>
        </aside>

        <main className="flex-1 p-8">
            <Outlet />
        </main>
    </>;
};