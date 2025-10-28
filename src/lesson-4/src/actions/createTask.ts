import { getFormHtml } from '../components/getFormHtml';
import { createTask } from '../server-util';
import { updateTasks } from './updateTasks';

export const setupForm = async (element: HTMLElement) => {
  element.innerHTML = getFormHtml();
  const item = document.querySelector<HTMLFormElement>('#simpleForm')!;

  const onSubmit = async (e: SubmitEvent) => {
    e.preventDefault();

    let valid = true;
    const title = item.querySelector<HTMLInputElement>('#title')!;
    const description = item.querySelector<HTMLInputElement>('#description')!;
    const status = item.querySelector<HTMLSelectElement>('#status')!;
    const deadline = item.querySelector<HTMLInputElement>('#deadline')!;

    document.querySelectorAll('.error').forEach((e) => (e.textContent = ''));
    const result: {
      title: string;
      description: string;
      createdAt: Date;
      status: 'todo' | 'in_progress' | 'done';
      deadline: Date;
      priority: 'low';
    } = {
      title: title.value.trim(),
      description: description.value.trim(),
      createdAt: new Date(),
      deadline: new Date(deadline.value),
      status: status.value as 'todo' | 'in_progress' | 'done',
      priority: 'low',
    };

    if (result.title.length < 3) {
      document.getElementById('titleError')!.textContent = 'Min. 3 symbols.';
      valid = false;
    }
    if (result.description.trim().length < 5) {
      document.getElementById('descriptionError')!.textContent =
        'Min. 3 symbols.';
      valid = false;
    }
    if (!result.status) {
      document.getElementById('statusError')!.textContent = 'Select status';
      valid = false;
    }
    const today = new Date().toISOString().split('T')[0];
    if (!result.deadline || deadline.value < today) {
      document.getElementById('dateError')!.textContent =
        'Data must be in future';
      valid = false;
    }

    if (valid) {
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
