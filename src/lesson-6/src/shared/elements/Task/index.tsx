import { Tag } from 'antd';
import type { Priority, Status, TaskBody } from '../../../features/types';
import type { JSX } from 'react';
import { format } from 'date-fns';

const statusTags: Record<Status, JSX.Element> = {
  done: <Tag color='green'>Done</Tag>,
  in_progress: <Tag color='yellow'>In progress</Tag>,
  todo: <Tag color='gray'>To do</Tag>,
};

const priorityTags: Record<Priority, JSX.Element> = {
  high: <Tag color='red'>Hight</Tag>,
  normal: <Tag color='yellow'>Normal</Tag>,
  low: <Tag color='gray'>Low</Tag>,
};

export const Task = ({
  title,
  description,
  status,
  deadline,
  priority,
}: TaskBody) => {
  return (
    <li className='bg-white shadow-md rounded-lg p-4'>
      <h2 className='text-lg font-semibold'>{title}</h2>
      <p className='text-gray-600 text-sm'>{description}</p>
      <div className='flex justify-between text-sm mt-2'>
        <span className='text-gray-600 font-medium '>
          Status: {statusTags[status]}
        </span>
        <span className='text-gray-600 font-medium'>
          Priority: {priorityTags[priority]}
        </span>
        {deadline && <span className='text-gray-600'>
          Deadline: {format(deadline, "MMM dd, yyyy")}
        </span>}
      </div>
    </li>
  );
};
