const express = require("express");
const cors = require("cors");
const app = express();
const server = require("http").createServer(app);
const connectDB = require("./config/mongoConnection");
var userRouter = require("./src/routes/users");
var eventRouter = require("./src/routes/EventRoute");

options = {
  cors: true,
};

const io = require("socket.io")(server, options);
// Middlewear
app.use(cors());
app.use(express.json({ limit: "50mb" }));


 

io.on("connection", async (socket) => {  
  socket.on("Deconnect_All", (TokenReducer) => {
  io.emit(`Deconnect_All`,TokenReducer)
});
});
 
// INIT PORT
const PORT = process.env.PORT || 5000;

// Connect Database
connectDB();
// Init Middleware
app.use(cors());
app.options("*", cors());
app.use(express.json());

// Define Routes
app.use("/users", userRouter);
app.use("/events", eventRouter);

// RUNNIG THE SERVER
server.listen(PORT, function () {
  console.log(`Server running on port ${PORT}`);
});
