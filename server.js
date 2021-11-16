const express = require('express');
const connectDB = require('./config/mongoConnection');
var userRouter = require('./src/routes/users');
var eventRouter = require('./src/routes/EventRoute');
const cors = require('cors')

const app = express();
// Connect Database
connectDB();
// Init Middleware
app.use(cors())
app.use(express.json());

// Define Routes
app.use('/users', userRouter);
app.use('/events', eventRouter);

app.get("/text",(req,res)=>{
    res.send("TEST !")
})

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server started ${PORT}`));
