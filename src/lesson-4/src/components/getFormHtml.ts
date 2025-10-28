export const getFormHtml = () => `

<form id="simpleForm">
<div>
  <label for="title" class="block text-sm font-medium text-gray-700">Title</label>
  <input type="text" id="title" class="w-full border border-solid border-gray-300 rounded-md mt-1 p-2 focus:ring-blue-500 focus:border-blue-500" required />
</div>

<div>
  <label for="description" class="block text-sm font-medium text-gray-700">Description</label>
  <textarea id="description" class="w-full border border-solid border-gray-300 rounded-md mt-1 p-2 focus:ring-blue-500 focus:border-blue-500"></textarea>
</div>

<div>
  <label for="status" class="block text-sm font-medium text-gray-700">Status</label>
  <select id="status" class="w-full border border-solid  border-gray-300 rounded-md mt-1 p-2 focus:ring-blue-500 focus:border-blue-500">
  <option value="">Select...</option>
    <option value="todo">To do</option>
    <option value="in_progress">In progress</option>
    <option value="done">Done</option>
  </select>
</div>

<div>
  <label for="priority" class="block text-sm font-medium text-gray-700">Priority</label>
  <select id="priority" class="w-full border border-solid border-gray-300 rounded-md mt-1 p-2 focus:ring-blue-500 focus:border-blue-500">
    <option value="">Select...</option>
    <option value="low">Low</option>
    <option value="normal">Normal</option>
    <option value="high">High</option>
  </select>
</div>

<div>
  <label for="deadline" class="block text-sm font-medium text-gray-700">Deadline</label>
  <input type="date" id="deadline" class="w-full border border-solid border-gray-300 rounded-md mt-1 p-2 focus:ring-blue-500 focus:border-blue-500" />
</div>

<button type="submit"
  class="w-full bg-green-600 hover:bg-green-700 text-white font-semibold px-4 py-2 rounded-lg shadow-md">
  Save Task
</button>
</form>

    `;
