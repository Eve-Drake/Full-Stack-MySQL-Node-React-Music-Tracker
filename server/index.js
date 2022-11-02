import express from 'express';


const app = express();



app.get('/', (req,res) => {
    res.send('Incorrect Route')
})

app.listen(4000, () =>{
    console.log('Ready');
})

