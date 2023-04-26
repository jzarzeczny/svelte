import { getTodos, addTodo, removeTodo, changeStatusTodo } from '$lib/queries/todos';
import { fail } from '@sveltejs/kit';

export const load = async () => {
	const posts = await getTodos();

	return {
		posts
	};
};

export const actions = {
	add: async ({ request }) => {
		const data = await request.formData();
		const todo = data.get('todo') as string;
		await addTodo({
			value: todo
		});
	},
	remove: async ({ url }) => {
		const todoId = url.searchParams.get('id');
		if (!todoId) {
			return fail(404, { message: 'Not found' });
		}
		return await removeTodo(todoId);
	},
	done: async ({ url }) => {
		const todoId = url.searchParams.get('id');
		if (!todoId) {
			return fail(404, { message: 'Not found' });
		}
		return await changeStatusTodo(todoId);
	}
};
