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

//db.run('CREATE TABLE music (id INTEGER PRIMARY KEY AUTOINCREMENT, title TEXT NOT NULL, artist TEXT, album TEXT)')

//db.run('DROP TABLE music')

// db.run('INSERT INTO music(title, artist, album) VALUES(?, ?, ?)', ['Node Added Title', 'Node Added Artist', 'Node Added Album'], (err) =>{
//     if(err){
//         return console.log(err.message);
//     }
//     console.log('Row Added: ${this.lastID}');
// })



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

