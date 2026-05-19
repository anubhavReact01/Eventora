
// const express = require("express");
// const mongoose = require("mongoose");
// const cors = require("cors");
// const dotenv = require("dotenv");
// const path = require("path"); //new code
// dotenv.config();

// const authRoutes  = require("./routes/auth");
// const eventRoutes = require("./routes/events");
//  const bookingRoutes = require("./routes/bookings");

// const app = express();
// const _dirname = path.resolve(); //new code
// //Middleware
// app.use(cors());
// app.use(express.json());


// //Routes 
// app.use('/api/auth',authRoutes);
// app.use('/api/events',eventRoutes)
// app.use('/api/bookings',bookingRoutes)

// app.use(express.static(path.join(_dirname),"/client/dist"))
// app.get('*',(_,res)=>{
//   res.sendFile(path.resolve(_dirname,"client","dist","index.html"))
// })

// //Database Connection
// mongoose.connect(process.env.MONGODB_URL)
//   .then(() => {
//     console.log("MongoDB Connected");
//   })
//   .catch((error) => {
//     console.error("Error connecting to MongoDb", error);
//   });

// const PORT = process.env.PORT || 4000;

// app.get('/',(req,res)=>{
//   res.send('Backend working');
// });

// app.listen(PORT,() => {
//   console.log(`Server is running on port ${PORT}`);
// });

const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const dotenv = require("dotenv");
const path = require("path");

dotenv.config();

const authRoutes = require("./routes/auth");
const eventRoutes = require("./routes/events");
const bookingRoutes = require("./routes/bookings");

const app = express();
const _dirname = path.resolve();

// Middleware
app.use(cors());
app.use(express.json());

// API Routes
app.use("/api/auth", authRoutes);
app.use("/api/events", eventRoutes);
app.use("/api/bookings", bookingRoutes);

// Serve frontend (Vite build folder)
app.use(express.static(path.join(_dirname, "client", "dist")));

app.get("/*rest", (_, res) => {
  res.sendFile(
    path.join(_dirname, "client", "dist", "index.html")
  );
});
// Database Connection
mongoose
  .connect(process.env.MONGODB_URL)
  .then(() => {
    console.log("MongoDB Connected");
  })
  .catch((error) => {
    console.error("Error connecting to MongoDB:", error);
  });

const PORT = process.env.PORT || 4000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});