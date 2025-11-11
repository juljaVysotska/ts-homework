import { setupForm } from './actions/createTask';
import { setupTasks } from './actions/setupTasks';

setupTasks(document.querySelector<HTMLElement>('#tasks')!);

const showFormBtn = document.getElementById('show-form-btn')!;
const taskForm = document.getElementById('form')!;
showFormBtn.addEventListener('click', () => {
  taskForm.classList.toggle('hidden');
  setupForm();
});
