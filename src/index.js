const express = require("express");
const dotenv = require("dotenv");
const apiRoutes = require("./routes/api")

dotenv.config();
const app = express();

const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use("/api" , apiRoutes);

app.get("/" , (req , res) => {
    res.send("Welcome to REST API!");
})

app.get("/user" , (req , res) => {
    res.send("Welcome to Hululu!");
})

app.listen(PORT , () => {
    console.log(`Server is running on port ${PORT}`);
})