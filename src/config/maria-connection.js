const mariadb = require('mariadb');
const pool = mariadb.createPool({
    host: process.env.DB_HOST,
    user: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    connectionLimit: 5,
    database: process.env.DATABASE_NAME
});

const mariaConnection = function () {
    return new Promise((resolve, reject) => {
        pool.getConnection()
            .then((conn) => {
                resolve(conn);
            }).catch((error) => {
                reject(error);
            });
    });
};

module.exports = mariaConnection;