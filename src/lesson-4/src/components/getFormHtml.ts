export const getFormHtml = () => `

<form id="simpleForm">
<div>
  <label for="title" class="block text-sm font-medium text-gray-700">Title</label>
  <input type="text" id="title" class="w-full border border-solid border-gray-300 rounded-md mt-1 p-2 focus:ring-blue-500 focus:border-blue-500" required />
  <span id="titleError"  class="error block text-sm font-small text-red-700"> </span>
</div>

<div>
  <label for="description" class="block text-sm font-medium text-gray-700">Description</label>
  <textarea id="description" class="w-full border border-solid border-gray-300 rounded-md mt-1 p-2 focus:ring-blue-500 focus:border-blue-500"></textarea>
  <span id="descriptionError"  class="error block text-sm font-small text-red-700"> </span>
  </div>

<div>
  <label for="status" class="block text-sm font-medium text-gray-700">Status</label>
  <select id="status" class="w-full border border-solid  border-gray-300 rounded-md mt-1 p-2 focus:ring-blue-500 focus:border-blue-500">
    <option value="todo">To do</option>
    <option value="in_progress">In progress</option>
    <option value="done">Done</option>
  </select>
  <span id="statusError"  class="error block text-sm font-small text-red-700"> </span>
  </div>

<div>
  <label for="priority" class="block text-sm font-medium text-gray-700">Priority</label>
  <select id="priority" class="w-full border border-solid border-gray-300 rounded-md mt-1 p-2 focus:ring-blue-500 focus:border-blue-500">
    <option value="low">Low</option>
    <option value="normal">Normal</option>
    <option value="high">High</option>
  </select>
  <span id="priorityError"  class="error block text-sm font-small text-red-700"> </span>
  </div>

<div>
  <label for="deadline" class="block text-sm font-medium text-gray-700">Deadline</label>
  <input type="date" id="deadline" class="w-full border border-solid border-gray-300 rounded-md mt-1 p-2 focus:ring-blue-500 focus:border-blue-500" />
  <span id="dateError"  class="error block text-sm font-small text-red-700"> </span>
  </div>

<button type="submit"
id="btnSubmit"
  class="w-full bg-green-600 hover:bg-green-700 disabled:bg-red-700 text-white font-semibold px-4 py-2 rounded-lg shadow-md">
  Save Task
</button>
</form>

    `;
