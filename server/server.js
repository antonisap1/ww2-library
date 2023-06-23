import express from 'express';
import path from 'path';
import routes from './routes.js';
import mysql from 'mysql';
import cors from 'cors';

const app = express();
app.use(cors());

const pool = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: 'password',
  database: 'small_arms_db',
});

app.use('/api', routes); // Mount the routes

const port = process.env.PORT || 3001;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
