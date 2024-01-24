const express = require('express');
const app = express();
const port = 3000;

app.get("/", (req, res) => {
    res.send("Hello world");
});

const cars = ["Audi","BMV", "WV"];

app.get("/cars", (req, res) => {
    res.send(cars);
}) ;

app.listen(port, () => {
    console.log(`app is listening on the port ${port}`);
});