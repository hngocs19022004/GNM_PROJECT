const express = require('express');
const app = express();
const port = 4000;

const morgan = require('morgan');
const bodyParser = require("body-parser");
const cors = require("cors");
const { MongoClient, ObjectId } = require('mongodb');

// Middleware
app.use(morgan('combined'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

// Kết nối MongoDB
const client = new MongoClient("mongodb://127.0.0.1:27017");
client.connect();
const database = client.db("");
const fashionCollection = database.collection("");

// Kiểm tra server đang chạy
app.listen(port, () => {
    console.log(`🚀 My server listening on port ${port}`);
});

app.get("/", (req, res) => {
    res.send("This web server is processed for MongoDB");
});