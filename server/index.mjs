import express from 'express';
const sqlite3 = require('sqlite3').verbose();

const app = express();

app.listen(4000, () =>{
    console.log('Ready');
})

let database = new sqlite3.Database(':memory:', (err) =>{
    if(err){
        return console.error(err.message)
    }
    console.log('Database C0nnected')
});
