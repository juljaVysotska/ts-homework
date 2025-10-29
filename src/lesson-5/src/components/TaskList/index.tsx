import { Task } from '../../elements/Task';
import { taskApi } from '../../store/tasks';

export const TaskList = () => {
    const { data = [], isLoading, isError } = taskApi.useGetAllQuery();

    if (isLoading) return 'Loading...';
    if (isError) return 'Error, try again';

    const tasksJSX = data.map((item) => {
        return <Task key={item.id} {...item} />;
    });

    return (
        <ul id='tasks' className='w-full space-y-4 mb-6'>
            {tasksJSX}
        </ul>
    );
};
