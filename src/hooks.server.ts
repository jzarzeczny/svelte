import { startMongo } from '$lib/db';

startMongo()
	.then(() => {
		console.log('Mongo started');
	})
	.catch((e) => {
		console.error(e);
	});
