import sequelize from './config/db.js';
import mysql from 'mysql2';
import { config } from 'dotenv';

config();

const dbConfig = {
  host: process.env.MYSQL_HOST,
  user: process.env.MYSQL_USER,
  password: process.env.MYSQL_PASSWORD
};

const dbName = process.env.MYSQL_DATABASE;
const createDbQuery = `CREATE DATABASE IF NOT EXISTS ${dbName}`;

const connection = mysql.createConnection(dbConfig);

connection.query(createDbQuery, (err) => {
    if (err) throw err;
    console.log("Database created successfully");

    connection.end(async (err) => {
        if (err) {
            console.error('Error closing mysql connection:', err);
            return;
        }

        try {
    
            await sequelize.authenticate();
            console.log('Connection to the database has been established successfully.');
            // Synchroniser tous les modèles avec la base de données
            await sequelize.sync({ force: true }); // Attention: `{ force: true }` va DROP les tables existantes
            console.log('All models were synchronized successfully.');
          } catch (error) {
            console.error('Unable to connect to the database:', error);
          }


    });





});



/* const initDb = async () => {
  try {
    
    await sequelize.authenticate();
    console.log('Connection to the database has been established successfully.');
    // Synchroniser tous les modèles avec la base de données
    await sequelize.sync({ force: true }); // Attention: `{ force: true }` va DROP les tables existantes
    console.log('All models were synchronized successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
};

initDb(); */
