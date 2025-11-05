import { ErrorMessage } from '@hookform/error-message';
import { Controller, useForm } from 'react-hook-form';
import { newTaskDefaultValueSchema } from './validationSchema';
import cx from 'classnames';
import { useNavigate } from 'react-router';
import { taskApi } from '../../../../store/tasks';
import type { FC } from 'react';
import type { NewTaskBody } from '../../types';
// import type { NewTaskBody } from '../../types';

const inputElementStyles = {
    label: 'block text-sm font-medium text-gray-700',
    default:
        'w-full border border-solid border-gray-300 rounded-md mt-1 p-2 focus:ring-blue-500 focus:border-blue-500 bg-white',
    error: 'border-red-300 r focus:outline-red-300 focus:outline-red-500',
    errorText: 'text-sm font-medium text-red-700',
    submitButton:
        'w-full bg-green-600 hover:bg-green-700 disabled:bg-red-700 text-white font-semibold px-4 py-2 rounded-lg shadow-md',
};

export const CreateTaskForm: FC = () => {
    const [createTaskMutation] = taskApi.useCreateTaskMutation();
    const navigate = useNavigate();

    const {
        register,
        handleSubmit,
        control,
        formState: { errors, isValid },
    } = useForm<NewTaskBody>({
        mode: 'all',
        defaultValues: newTaskDefaultValueSchema,
    });

    const onSubmit = async (formData: NewTaskBody) => {
        await createTaskMutation(formData);
        navigate({
            pathname: '/task'
        });
    };

    return (
        <form className='w-full grid gap-2' onSubmit={handleSubmit(onSubmit)}>
            <div>
                <label htmlFor='title' className={cx(inputElementStyles.label)}>
                    Title
                </label>
                <input
                    type='text'
                    id='title'
                    placeholder='Title'
                    className={cx(inputElementStyles.label, inputElementStyles.default, {
                        [inputElementStyles.error]: errors.title,
                    })}
                    {...register('title', {
                        required: 'Title is required!',
                        minLength: {
                            value: 3,
                            message: 'Min. 3 symbols!',
                        },
                    })}
                />

                <ErrorMessage
                    errors={errors}
                    name='title'
                    render={(data) => (
                        <span className={cx(inputElementStyles.errorText)}>
                            {data.message}
                        </span>
                    )}
                />
            </div>

            <div>
                <label htmlFor='description' className={cx(inputElementStyles.label)}>
                    Description
                </label>
                <textarea
                    id='description'
                    placeholder='Description'
                    className={cx(inputElementStyles.label, inputElementStyles.default, {
                        [inputElementStyles.error]: errors.description,
                    })}
                    {...register('description', {
                        required: 'Description is required!',
                        minLength: {
                            value: 3,
                            message: 'Min. 3 symbols!',
                        },
                    })}
                ></textarea>
                <ErrorMessage
                    errors={errors}
                    name='description'
                    render={(data) => (
                        <span className={cx(inputElementStyles.errorText)}>
                            {data.message}
                        </span>
                    )}
                />
            </div>

            <div>
                <label htmlFor='status' className={cx(inputElementStyles.label)}>
                    Status
                </label>
                <select
                    id='status'
                    className={cx(inputElementStyles.label, inputElementStyles.default, {
                        [inputElementStyles.error]: errors.status,
                    })}
                    {...register('status')}
                >
                    <option value='todo'>To do</option>
                    <option value='in_progress'>In progress</option>
                    <option value='done'>Done</option>
                </select>
                <ErrorMessage
                    errors={errors}
                    name='status'
                    render={(data) => (
                        <span className={cx(inputElementStyles.errorText)}>
                            {data.message}
                        </span>
                    )}
                />
            </div>

            <div>
                <label htmlFor='priority' className={cx(inputElementStyles.label)}>
                    Priority
                </label>
                <select
                    id='priority'
                    className={cx(inputElementStyles.label, inputElementStyles.default, {
                        [inputElementStyles.error]: errors.priority,
                    })}
                    {...register('priority')}
                >
                    <option value='low'>Low</option>
                    <option value='normal'>Normal</option>
                    <option value='high'>High</option>
                </select>
                <ErrorMessage
                    errors={errors}
                    name='priority'
                    render={(data) => (
                        <span className={cx(inputElementStyles.errorText)}>
                            {data.message}
                        </span>
                    )}
                />
            </div>

            <div>
                <label htmlFor='deadline' className={cx(inputElementStyles.label)}>
                    Deadline
                </label>
                <Controller
                    control={control}
                    name='deadline'
                    rules={{
                        required: 'Deadline is required',
                        validate: (value) => {
                            const selectedDate = new Date(value);
                            const today = new Date();
                            if (selectedDate < today) {
                                return 'Date cannot be in the past';
                            }
                            return true;
                        },
                    }}
                    render={({ field: { onChange } }) => (
                        <>
                            <input
                                type='date'
                                id='deadline'
                                className={cx(
                                    inputElementStyles.label,
                                    inputElementStyles.default,
                                    {
                                        [inputElementStyles.error]: errors.deadline,
                                    },
                                )}
                                onChange={onChange}
                                onBlur={onChange}
                                onInput={onChange}
                                min={new Date().toISOString()}
                            />
                            <ErrorMessage
                                errors={errors}
                                name='deadline'
                                render={(data) => (
                                    <span className={cx(inputElementStyles.errorText)}>
                                        {data.message}
                                    </span>
                                )}
                            />
                        </>
                    )}
                />
            </div>

            <button
                type='submit'
                className={cx(inputElementStyles.submitButton)}
                disabled={!isValid}
            >
                Save Task
            </button>
        </form>
    );
};
