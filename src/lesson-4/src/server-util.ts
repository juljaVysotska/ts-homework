export interface Task {
  id?: number;
  title: string;
  description: string;
  createdAt?: string;
  deadline?: Date;
  status: 'todo' | 'in_progress' | 'done';
  priority: 'low' | 'normal' | 'high';
}

const API_URL = 'http://localhost:3000/tasks';

export const getTasks = async (): Promise<Task[]> => {
  const response = await fetch(API_URL);
  if (!response.ok) throw new Error('Failed to load tasks');
  return response.json();
};

export const getTaskById = async (id: string): Promise<Task> => {
  const response = await fetch(`${API_URL}/${id}`);
  if (!response.ok) throw new Error('Failed to load task');
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
  if (!response.ok) throw new Error('Failed to create task');
  return response.json();
};

export const updateTask = async (id: string, task: Task): Promise<Task> => {
  const response = await fetch(`${API_URL}/${id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(task),
  });
  if (!response.ok) throw new Error('Failed to update task');
  return response.json();
};

export const patchTask = async (
  id: string,
  task: Partial<Task>,
): Promise<Task> => {
  const response = await fetch(`${API_URL}/${id}`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(task),
  });
  if (!response.ok) throw new Error('Failed to partially update task');
  return response.json();
};

export const deleteTask = async (id: string): Promise<void> => {
  const response = await fetch(`${API_URL}/${id}`, {
    method: 'DELETE',
  });
  if (!response.ok) throw new Error('Failed to delete task');
};
