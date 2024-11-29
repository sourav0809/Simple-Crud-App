const express = require("express");
const app = express();
require("dotenv").config();

// Middleware to handle JSON responses
app.use(express.json());

// Dummy data endpoint
app.get("/api/data", (req, res) => {
  const data = {
    message: "This is a dummy data response.",
    timestamp: new Date().toISOString(),
  };
  res.json(data);
});

// Another example endpoint returning random user data
app.get("/api/user", (req, res) => {
  const user = {
    id: 1,
    name: "John Doe",
    email: "john.doe@example.com",
    age: 28,
  };
  res.json(user);
});

const PORT = process.env.PORT || 8000;
// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
