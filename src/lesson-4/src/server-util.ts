export interface Task {
  id?: number;
  title: string;
  description: string;
  createdAt?: Date;
  deadline?: Date;
  status: 'todo' | 'in_progress' | 'done';
  priority: 'low' | 'normal' | 'high';
}

const API_URL = 'http://localhost:3000/tasks';

export const getTasks = async (): Promise<Task[]> => {
  const response = await fetch(API_URL);
  if (!response.ok) throw new Error('Error on load tasks');
  return response.json();
};

export const createTask = async (task: Task): Promise<Task> => {
  const response = await fetch(API_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(task),
  });
  if (!response.ok) throw new Error('Error on update task');
  return response.json();
};
