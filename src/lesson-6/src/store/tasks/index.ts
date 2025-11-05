import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import type { NewTaskBody, TaskBody } from '../../features/tasks/types';
export const taskApi = createApi({
  reducerPath: 'taskApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3000' }),
  tagTypes: ['Task'],
  endpoints: (builder) => ({
    getAll: builder.query<TaskBody[], void>({
      query: () => '/tasks',
      providesTags: ['Task'],
    }),

    getById: builder.query<TaskBody, { id: string; }>({
      query: ({ id }) => `/tasks/${id}`,
    }),

    createTask: builder.mutation<TaskBody, NewTaskBody>({
      query: (body: NewTaskBody) => ({
        url: `/tasks`,
        method: 'POST',
        body,
      }),
      invalidatesTags: ['Task'],
    }),
  }),
});
