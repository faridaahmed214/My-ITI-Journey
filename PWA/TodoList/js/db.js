const dbPromise = idb.open('TodoDB', 1, upgradeDB => {
  if (!upgradeDB.objectStoreNames.contains('tasks')) {
    upgradeDB.createObjectStore('tasks', { keyPath: 'id', autoIncrement: true });
  }
});

async function saveTaskToDB(task) {
  const db = await dbPromise;
  const tx = db.transaction('tasks', 'readwrite');
  const store = tx.objectStore('tasks');
  await store.add(task);
  return tx.complete;
}

async function getTasksFromDB() {
  const db = await dbPromise;
  const tx = db.transaction('tasks', 'readonly');
  const store = tx.objectStore('tasks');
  return store.getAll();
}
async function updateTaskInDB(task) {
  const db = await dbPromise;
  const tx = db.transaction('tasks', 'readwrite');
  const store = tx.objectStore('tasks');
  await store.put(task);
  return tx.complete;
}

async function deleteTaskFromDB(id) {
  const db = await dbPromise; 
  const tx = db.transaction('tasks', 'readwrite'); 
  const store = tx.objectStore('tasks'); 
  
  await store.delete(id); 
  return tx.complete;
}