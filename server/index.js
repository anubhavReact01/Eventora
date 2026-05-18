
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const dotenv = require("dotenv");

dotenv.config();

const authRoutes  = require("./routes/auth");
const eventRoutes = require("./routes/events");
 const bookingRoutes = require("./routes/bookings");

const app = express();

//Middleware

app.use(cors());
app.use(express.json());


//Routes 

app.use('/api/auth',authRoutes);
app.use('/api/events',eventRoutes)
app.use('/api/bookings',bookingRoutes)


//Database Connection
mongoose.connect(process.env.MONGODB_URL)
  .then(() => {
    console.log("MongoDB Connected");
  })
  .catch((error) => {
    console.error("Error connecting to MongoDb", error);
  });

const PORT = process.env.PORT || 4000;

app.get('/',(req,res)=>{
  res.send('Backend working');
});

app.listen(PORT,() => {
  console.log(`Server is running on port ${PORT}`);
});

