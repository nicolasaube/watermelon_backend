const express = require('express');
const mysql = require('mysql');
const bodyParser = require('body-parser');
const path = require('path');
const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(__dirname + '/public'));

let db = mysql.createConnection({
host: "localhost",
user: "root",
password: "root",
database: "watermelon",
port: "8889"
});

app.get('/', function(req, res) {
        res.sendFile(path.join(__dirname + '/index.html'), {headers:{'Content-type': 'text/html'}});
    });

// USERS
app.get('/users', function(req, res) {
    let query = "SELECT * FROM users";
    db.query(query, function(err, result, fields) {
    if (err) throw err;
    res.send(JSON.stringify(result));
    });
});

app.get('/users', function(req, res) {
    let query = "SELECT * FROM users";
    db.query(query, function(err, result, fields) {
        if (err) throw err;
        res.send(JSON.stringify(result));
    });
});

//CARDS
app.get('/cards', function(req, res) {
    let query = "SELECT * FROM cards";
    db.query(query, function(err, result, fields) {
        if (err) throw err;
        res.send(JSON.stringify(result));
    });
});

//PAYINS
app.get('/payins', function(req, res) {
    let query = "SELECT * FROM payins";
    db.query(query, function(err, result, fields) {
        if (err) throw err;
        res.send(JSON.stringify(result));
    });
});

//PAYOUTS
app.get('/payouts', function(req, res) {
    let query = "SELECT * FROM payouts";
    db.query(query, function(err, result, fields) {
        if (err) throw err;
        res.send(JSON.stringify(result));
    });
});

//TRANSFERS
app.get('/transfers', function(req, res) {
    let query = "SELECT * FROM transfers";
    db.query(query, function(err, result, fields) {
        if (err) throw err;
        res.send(JSON.stringify(result));
    });
});

//WALLETS
app.get('/wallets', function(req, res) {
    let query = "SELECT * FROM wallets";
    db.query(query, function(err, result, fields) {
        if (err) throw err;
        res.send(JSON.stringify(result));
    });
});

app.get('/users/:id', function(req, res) {
    let id = req.params.id;
    let query = `SELECT * FROM users WHERE id=${id}`;
    db.query(query, function(err, result, fields) {
    if (err) throw err;
    res.send(JSON.stringify(result));
    });
});

app.put('/users/:id', function(req, res) {
    let id = req.params.id;
    let username = req.body.username;
    let query = `UPDATE users SET username = '${username}' WHERE id=${id}`;

    db.query(query, function(err, result, fields) {
        if (err) throw err;
        res.send(JSON.stringify("Success"));
    });
});

app.delete('/users', function(req, res) {
    let query = "DELETE FROM users";
    db.query(query, function(err, result, fields) {
        if (err) throw err;
        res.send(JSON.stringify("Success"));
    });
});

app.delete('/users/:id', function(req, res) {
    let id = req.params.id;
    let query = `DELETE FROM users WHERE id=${id}`;

    db.query(query, function(err, result, fields) {
        if (err) throw err;
            res.send(JSON.stringify("Success"));
    });
});

app.post('/users', function(req, res) {
    let username = req.body.username;
    let query = `INSERT INTO users (username) VALUES ('${username}')`;

    db.query(query, function(err, result, fields) {
        if (err) throw err;
            res.send(JSON.stringify("Success"));
    });
});

app.listen(3000, function() {
    db.connect(function(err) {
        if (err) throw err;
        console.log('Connection to database successful!');
        });
    console.log('Example app listening on port 3000!');
});
