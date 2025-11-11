import { createTask } from '../server-util';
import type { Priority, Status, Task } from '../types';
import { updateTasks } from './updateTasks';

const getFormValidation = (formData: Omit<Task, 'id'>) => {
  let valid = true;

  const setError = (elementId: string, text: string) => {
    document.getElementById(elementId)!.textContent = text;
    valid = false;
    return;
  };

  document.querySelectorAll('.error').forEach((e) => (e.textContent = ''));

  if (formData.title.length < 3) {
    setError('titleError', 'Min. 3 symbols.');
  }

  if (formData.description.trim().length < 3) {
    setError('descriptionError', 'Min. 3 symbols.');
  }

  if (!formData.status) {
    setError('statusError', 'Select status');
  }

  if (!formData.priority) {
    setError('priorityError', 'Select priority');
  }

  const today = new Date().toISOString().split('T')[0];
  const deadline = document.querySelector<HTMLInputElement>('#deadline')!;
  if (!formData.deadline || deadline.value < today) {
    setError('dateError', 'Data must be in future');
  }

  return valid;
};

export const setupForm = () => {
  const item = document.querySelector<HTMLFormElement>('#simpleForm')!;

  const title = item.querySelector<HTMLInputElement>('#title')!;
  const description = item.querySelector<HTMLInputElement>('#description')!;
  const status = item.querySelector<HTMLSelectElement>('#status')!;
  const priority = item.querySelector<HTMLSelectElement>('#priority')!;
  const deadline = item.querySelector<HTMLInputElement>('#deadline')!;

  const onSubmit = async (e: SubmitEvent) => {
    e.preventDefault();

    const result: Omit<Task, 'id'> = {
      title: title.value.trim(),
      description: description.value.trim(),
      createdAt: new Date(),
      deadline: new Date(deadline.value),
      status: status.value as Status,
      priority: priority.value as Priority,
    };
    const isFormValid = getFormValidation(result);

    if (isFormValid) {
      console.log(result);
      await createTask({
        title: result.title,
        description: result.description,
        createdAt: new Date(),
        deadline: new Date(result.deadline),
        status: result.status,
        priority: result.priority,
      });
      item.reset();
      updateTasks();
    }
  };

  item.addEventListener('submit', (e) => onSubmit(e));
};
