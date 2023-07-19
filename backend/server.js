const express = require("express");
const notes = require("./data/notes");
const dotenv = require("dotenv");
const connectDB = require("../backend/config/db");
const userRoutes = require("./routes/userRoutes");
const { notFound, errorHandler } = require("./middlewares/errorMiddleware");
const path = require("path");

const app = express();

dotenv.config();
connectDB();
app.use(express.json());

app.get("/api/notes", (req, res) => {
  res.send(notes);
});

app.use("/api/users", userRoutes);

__dirname = path.resolve();
if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "/frontend/build")));
  app.get("*", (req, res) =>
    res.sendFile(path.resolve(__dirname, "frontend", "build", "index.html"))
  );
} else {
  app.get("/", (req, res) => {
    res.send("API is running");
  });
}

app.use(notFound);
app.use(errorHandler);

const PORT = process.env.PORT;

app.listen(PORT, console.log(`App is running on ${PORT}`));
