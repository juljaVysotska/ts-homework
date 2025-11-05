import type { FC } from 'react';
import { CreateTaskForm } from '../components/CreateTaskForm';

export const CreateTaskPage: FC = () => {
    return <>
        <h1 className="text-2xl font-bold mb-4">Create task</h1>
        <CreateTaskForm />
    </>;
};