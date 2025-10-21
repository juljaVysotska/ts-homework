import { data } from '../parsedData';
import { FilterParams, Task } from '../types';

export const filterArray = ({
  status,
  createdAt,
  priority,
}: FilterParams): Task[] => {
  const filteredData = data.filter((task) => {
    const filteredByStatus = status ? task.status === status : true;
    const filteredByPriority = priority ? task.priority === priority : true;
    const filteredByCreatedAt = createdAt ? task.createdAt === createdAt : true;

    return filteredByStatus && filteredByPriority && filteredByCreatedAt;
  });

  return filteredData;
};
