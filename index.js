const express = require('express');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 5000;

app.use(cors());

app.get('/', (req, res)=>{
    res.send('Learn-Tech-Edge API Running...')
});

app.listen(port, ()=>{
    console.log(`Learn-Tech-Edge Server is running at port: ${port}`);
});

