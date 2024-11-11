require('dotenv').config();

module.exports = {
    DB_PATH: process.env.DB_PATH || './db/queue.db',
    PORT: process.env.PORT || 3000,
};
