import { setupForm } from './actions/createTask';
import { setupTasks } from './actions/setupTasks';

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
 
  <h1 class="text-3xl font-bold mb-6 text-gray-800">Task Manager</h1>

  <button id="show-form-btn"
    class="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-4 py-2 rounded-lg shadow-md">
    Add Task
  </button>

    <div id="form"  class="hidden w-full max-w-xl bg-white p-6 mt-6 rounded-lg shadow-md space-y-4"> </div>

    <ul id="tasks" class="w-full max-w-xl space-y-4 mb-6">  </ul>

`;

setupTasks(document.querySelector<HTMLElement>('#tasks')!);

const showFormBtn = document.getElementById('show-form-btn')!;
const taskForm = document.getElementById('form')!;
showFormBtn.addEventListener('click', () => {
  console.log(taskForm);
  taskForm.classList.toggle('hidden');
  setupForm(document.querySelector<HTMLElement>('#form')!);
});
