import { Link, Navigate, Outlet, useNavigate, useParams } from 'react-router';
import { taskApi } from '../../../store/tasks';
import { Task } from '../../../shared/elements/Task';
// import { Task } from '../../../elements/Task';

import { format } from "date-fns";
import type { Priority, Status } from '../types';
import { EmptyState } from '../../../shared/elements/EmptyState';
import { LoadingState } from '../../../shared/elements/LoadingState';
import { ErrorState } from '../../../shared/elements/ErrorState';
import type { FC } from 'react';
import { LeftOutlined } from '@ant-design/icons';

const statusColors: Record<Status, string> = {
    todo: "bg-gray-200 text-gray-700",
    in_progress: "bg-blue-200 text-blue-700",
    done: "bg-green-200 text-green-700",
};

const priorityColors: Record<Priority, string> = {
    low: "bg-green-100 text-green-700",
    normal: "bg-yellow-100 text-yellow-700",
    high: "bg-red-100 text-red-700",
};

export const TaskPage: FC = () => {
    const { id } = useParams();
    const { data, isLoading, isError, refetch } = taskApi.useGetByIdQuery({ id: id || '' }, {
        skip: !id
    });
    const navigation = useNavigate();

    if (isLoading) return <LoadingState />;
    if (isError) return <ErrorState onRetry={refetch} />;

    if (!data) return <EmptyState
        title='No task found'
        description="Something went wrong"
        actionLabel="Back to task list"
        onAction={() => navigation('/task')}
    />;

    return <>
        <button onClick={() => navigation(-1)}><LeftOutlined /> Back</button>
        <div className="bg-white shadow-md rounded-xl p-5 border border-gray-100 hover:shadow-lg transition">
            <div className="flex items-center justify-between mb-3">
                <h3 className="text-lg font-semibold text-gray-800">{data.title}</h3>
                <span
                    className={`text-xs px-2 py-1 rounded-full font-medium ${statusColors[data.status]}`}
                >
                    {data.status.replace("_", " ")}
                </span>
            </div>

            <p className="text-gray-600 text-sm mb-4">{data.description}</p>

            <div className="flex items-center justify-between text-sm">
                <div className={`px-2 py-1 rounded-full ${priorityColors[data.priority]}`}>
                    Priority: {data?.priority}
                </div>
                <div className="text-gray-500">
                    Deadline: {format(data.deadline, "MMM dd, yyyy")}
                </div>
            </div>

            {data?.createdAt && (
                <p className="text-xs text-gray-400 mt-3">
                    Created: {format(data.createdAt, "MMM dd, yyyy")}
                </p>
            )}
        </div>
        <Outlet />
    </>;
};