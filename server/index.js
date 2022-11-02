import sqlite3 from 'sqlite3'
import express from 'express';
const app = express();

const db = new sqlite3.Database(':memory:', (err) =>{
    if(err) {
        return console.log(err.message)
    }
    console.log('Database Connected')
})

db.close((err)=>{
    if(err){
        console.log(err.message)
    }
    console.log('Database Connection Closed')
})


app.get('/', (req,res) => {
    res.send('Incorrect Route')
})

app.listen(4000, () =>{
    console.log('Ready');
})

