const connectToMongo = require('./db');
const express = require('express');
const app = express();
const port = 8000;
connectToMongo();

//to access body of post request
app.use(express.json());

app.use('/api/auth/', require('./routes/auth.js'));
app.use('/api/notes/', require('./routes/notes.js'));

app.listen(port, ()=>
{
    console.log(`iNotebook app listening on port ${port}`);
})

