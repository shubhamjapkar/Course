const express = require("express");
const bodyparser = require("body-parser");

const app = express();
app.use(bodyparser);
const PORT = 7000;

// const master = require("./routes/masterRoues");

// app.use('/api/v1',master);

app.listen(PORT,()=>{
    console.log(`Server is running on ${PORT}`)
})