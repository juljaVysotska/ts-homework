import type { Task } from '../types';

export const getTaskHtml = ({
  title,
  description,
  deadline,
  status,
  priority,
}: Task) => `
<li class="bg-white shadow-md rounded-lg p-4">
<h2 class="text-lg font-semibold">${title}</h2>
<p class="text-gray-600 text-sm">${description}</p>
<div class="flex justify-between text-sm mt-2">
    <span class="text-blue-600 font-medium ">Status: ${status}</span>
    <span class="text-yellow-600 font-medium">Priority: ${priority}</span>
    <span class="text-gray-500">Deadline: ${deadline.toISOString().split('T')[0]}</span>
</div>
</li>

`;
