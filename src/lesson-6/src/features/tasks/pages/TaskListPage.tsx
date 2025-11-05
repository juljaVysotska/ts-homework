import { Link, Outlet, useNavigate } from 'react-router';
import { taskApi } from '../../../store/tasks';
import { Task } from '../../../shared/elements/Task';
import { EmptyState } from '../../../shared/elements/EmptyState';
import { LoadingState } from '../../../shared/elements/LoadingState';
import { ErrorState } from '../../../shared/elements/ErrorState';
import { AppRoutes } from '../../../shared/types/router';

export const TaskListPage = () => {
    const { data = [], isLoading, isError, refetch } = taskApi.useGetAllQuery();
    const navigation = useNavigate();

    if (isLoading) return <LoadingState />;
    if (isError) return <ErrorState onRetry={refetch} />;

    const tasksJSX = data.map((item) => {
        return <Link to={item.id!} key={item.id} >
            <Task {...item} />
        </Link>;
    });

    return (
        <>
            <h1 className="text-2xl font-bold mb-4">Task list</h1>
            {data.length == 0 && <EmptyState
                title="No tasks yet"
                description="You haven’t created any tasks. Start by adding your first one!"
                actionLabel="Add Task"
                onAction={() => navigation(AppRoutes.CREATE_TASK)}
            />}

            {data.length !== 0 && <ul id='tasks' className='w-full grid gap-y-2 mb-6'>
                {tasksJSX}
            </ul>}
            <Outlet />
        </>
    );
};