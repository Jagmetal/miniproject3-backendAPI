require("dotenv").config();
const express = require("express");
let dbConnect = require("./dbConnect");
const app = express();

// parse requests of content-type - application / json
app.use(express.json());

app.get("/", (req, res) => {
    res.json({ message: "Welcome to myMongoDB application." });
});

// set port, listen for requests
const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`);
});

function func(param) {
    var text = ""
    for (let index = 0; index < array.length; index++) {
        const element = array[index];
    }
}