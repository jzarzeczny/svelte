import { MongoClient } from 'mongodb';
import { DB_URL } from '$env/static/private';
const client = new MongoClient(DB_URL);

export function startMongo() {
	console.log('Starting mongo...');
	return client.connect();
}

export default client.db();
