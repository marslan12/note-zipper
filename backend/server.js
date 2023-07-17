const express = require("express");
const notes = require("./data/notes");
const dotenv = require("dotenv");
const connectDB = require("../backend/config/db");
const userRoutes = require("./routes/userRoutes");
const { default: App } = require("../frontend/src/App");
const { notFound, errorHandler } = require("./middlewares/errorMiddleware");

const app = express();

dotenv.config();
connectDB();
app.use(express.json());
app.use(notFound);
app.use(errorHandler);

app.get("/", (req, res) => {
  res.send("API is running");
});

app.get("/api/notes", (req, res) => {
  res.send(notes);
});

app.use('/api/users', userRoutes);

const PORT = process.env.PORT;

app.listen(PORT, console.log(`App is running on ${PORT}`));
