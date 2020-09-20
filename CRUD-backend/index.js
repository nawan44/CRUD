
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const mysql = require('mysql');
 
// parse application/json
app.use(bodyParser.json());
 
//create database connection
const conn = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'password',
  database: 'activity_db'
});
 
//connect to database
conn.connect((err) =>{
  if(err) throw err;
  console.log('Mysql Connected...');
});
 
//tampilkan semua data activity
app.get('/api/todo',(req, res) => {
  let sql = "SELECT * FROM todolist_tbl";
  let query = conn.query(sql, (err, results) => {
    if(err) throw err;
    res.send(JSON.stringify({"status": 200, "error": null, "response": results}));
  });
});
 
//tampilkan data activity berdasarkan id
app.get('/api/todo/:id',(req, res) => {
  let sql = "SELECT * FROM todolist_tbl WHERE id="+req.params.id;
  let query = conn.query(sql, (err, results) => {
    if(err) throw err;
    res.send(JSON.stringify({"status": 200, "error": null, "response": results}));
  });
});
 
//Tambahkan data activity baru
app.post('/api/todo',(req, res) => {
  let data = {name: req.body.name, activity: req.body.activity, date: req.body.date};
  let sql = "INSERT INTO todolist_tbl SET ?";
  let query = conn.query(sql, data,(err, results) => {
    if(err) throw err;
    res.send(JSON.stringify({"status": 200, "error": null, "response": results}));
  });
});
 
//Edit data activity berdasarkan id
app.put('/api/todo/:id',(req, res) => {
  let sql = "UPDATE todolist_tbl SET name='"+req.body.name+"', activity='"+req.body.activity+"', date='"+req.body.date+"' WHERE id="+req.params.id;
  let query = conn.query(sql, (err, results) => {
    if(err) throw err;
    res.send(JSON.stringify({"status": 200, "error": null, "response": results}));
  });
});
 
//Delete data activity berdasarkan id
app.delete('/api/todo/:id',(req, res) => {
  let sql = "DELETE FROM todolist_tbl WHERE id="+req.params.id+"";
  let query = conn.query(sql, (err, results) => {
    if(err) throw err;
      res.send(JSON.stringify({"status": 200, "error": null, "response": results}));
  });
});
 
//Server listening
app.listen(8080,() =>{
  console.log('Server started on port 8080...');
});