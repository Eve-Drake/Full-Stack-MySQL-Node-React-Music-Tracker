import sqlite3 from 'sqlite3'
import express from 'express';
const app = express();
let sql = ``

const db = new sqlite3.Database('./music-data.db', sqlite3.OPEN_READWRITE, (err) =>{
    if(err) {
        return console.log(err.message)
    }
    console.log('Database Connected')
})

sql = `INSERT INTO music(title, artist, album) VALUES (?, ?, ?)`

db.run(sql, ['Database Added Title', 'Database Added Artist', 'Database Addded Album'], (err) => {
    if (err){
        return console.log(err.message)
    }
})

db.close((err)=>{
    if(err){
        console.log(err.message)
    }
    console.log('Database Connection Closed')
})


app.get('/', (req, res) => {
    res.send('Incorrect Route')
})

app.listen(4000, () =>{
    console.log('Ready');
})

