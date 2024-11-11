import fs from 'fs';
import path from 'path';
import db from '../../config/database.js'; // Certifique-se de que o caminho está correto

// Caminho absoluto para o arquivo SQL
const sqlPath = path.resolve('./db/migrations/createTables.sql');

// Lê o conteúdo do arquivo SQL
const sql = fs.readFileSync(sqlPath, 'utf8');

db.serialize(() => {
    db.exec(sql, (err) => {
        if (err) {
            console.error('Error executing SQL:', err.message);
        } else {
            console.log('Tables created successfully.');
        }
    });
    db.close();
});
