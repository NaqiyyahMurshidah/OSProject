const express = require('express');
const mysql = require('mysql');

const app = express();
const port = 3000;

// Create a MySQL connection
const connection = mysql.createConnection({
  host: 'mysql-container',
  user: 'myuser',
  password: 'mypassword',
  database: 'mydatabase'
});

// Connect to MySQL
connection.connect((err) => {
  if (err) {
    console.error('Error connecting to MySQL:', err);
    return;
  }
  console.log('Connected to MySQL');
});

// Define a route to get a random row
app.get('/random', (req, res) => {
    db.query('SELECT * FROM mytable ORDER BY RAND() LIMIT 1', (err, result) => {
        if (err) {
            res.status(500).send('Error retrieving data');
        } else {
            res.send(result);
        }
    });
});
 
// Start the server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
