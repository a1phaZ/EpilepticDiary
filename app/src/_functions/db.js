import {openDB} from "idb/with-async-ittr";

export async function initializeDB() {
	return await openDB('items', 1, {
		upgrade(database) {
			const store = database.createObjectStore('items', {keyPath: '_id', autoIncrement: true});
			store.createIndex('date', 'date');
		}
	});
}

export async function get(db, key, idxPath, idxVal) {
	let tx = db.transaction(key);
	// let itemsStore = tx.objectStore(key);

	let items = [];

	// let cursor = await itemsStore.openCursor();

	const index = tx.store.index(idxPath);
	// while (cursor) {
	// 	items.push(cursor.value)
	// 	cursor = await cursor.continue();
	// }
	
	for await (const cursor of index.iterate(idxVal)) {
		items.push(cursor.value);
	}

	return items;
	// return (await db).getAll(key);
}

export async function add(db, item) {
	let tx = db.transaction('items', 'readwrite');
	let itemsStore = tx.objectStore('items');
	try {
		await itemsStore.add(item);
	} catch (e) {
		throw e;
	}
}