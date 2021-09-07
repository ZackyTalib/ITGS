const express = require('express'); // requiring express module
const app = express(); // creating express server

const port = 3000; // port number to run the server on

const path = require('path'); // requiring path module

app.use("/public", express.static(path.join(__dirname, "./public"))); // serve static files

// send index.html file on / route
app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "./views/index.html"));
});

// telling the server to listen on specified port
app.listen(port, () => {
    console.log("Server started on localhost:" + port);
});