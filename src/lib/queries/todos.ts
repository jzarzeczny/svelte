import { ObjectId } from 'mongodb';
import db from '../db';

export async function getTodos() {
	const todos = await db.collection('todos').find().toArray();

	return JSON.parse(JSON.stringify(todos)) || [];
}

interface NewTodo {
	value: string;
}

export function addTodo(newTodo: NewTodo) {
	return db.collection('todos').insertOne({
		...newTodo,
		done: false
	});
}

export function removeTodo(todoId: string) {
	return db.collection('todos').deleteOne({
		_id: new ObjectId(todoId)
	});
}

export async function changeStatusTodo(todoId: string) {
	console.log('evecution of function');
	const todo = await db.collection('todos').findOne({ _id: new ObjectId(todoId) });
	return await db
		.collection('todos')
		.updateOne({ _id: new ObjectId(todoId) }, { $set: { done: !todo?.done } });
}
