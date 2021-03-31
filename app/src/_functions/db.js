import {openDB} from "idb/with-async-ittr";

export async function initializeDB() {
	return await openDB('epileptic_diary', 1, {
		upgrade(database) {
			const store = database.createObjectStore('items', {keyPath: '_id', autoIncrement: true});
			store.createIndex('date', 'date');
			const settingsStore = database.createObjectStore('settings', {keyPath: '_id', autoIncrement: true});
			settingsStore.createIndex('type', 'type');
		}
	});
}

export async function get(db, key, idxPath, idxVal) {
	let tx = db.transaction(key);

	let items = [];

	const index = tx.store.index(idxPath);
	
	for await (const cursor of index.iterate(idxVal)) {
		items.push(cursor.value);
	}

	return items;
}

export async function getOne(db, storeName, key) {
	let tx = db.transaction('items');
	let itemsStore = tx.objectStore(storeName);
	return itemsStore.get(key);
}

export async function add(db, item, storeName) {
	let tx = db.transaction(storeName, 'readwrite');
	let itemsStore = tx.objectStore(storeName);
	try {
		return await itemsStore.add(item);
	} catch (e) {
		throw e;
	}
}

export async function put(db, item, storeName) {
	let tx = db.transaction(storeName, 'readwrite');
	let itemsStore = tx.objectStore(storeName);
	
	try {
		await itemsStore.put(item);
	} catch (e) {
		throw e;
	}
}