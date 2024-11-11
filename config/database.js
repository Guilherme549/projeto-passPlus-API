import sqlite3 from 'sqlite3';
import path from 'path';

const dbPath = path.resolve('./db/queue.db');
const db = new sqlite3.Database(dbPath, (err) => {
    if (err) {
        console.error('Error connecting to SQLite database:', err.message);
    } else {
        console.log('Connected to the SQLite database.');
    }
});

export default db;
