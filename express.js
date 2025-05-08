// server.js

const express = require('express');
const path = require('path');
const { MongoClient } = require("mongodb");
const bodyParser = require("body-parser");

const app = express();
const port = 8000;

app.use(express.static(path.join(__dirname, 'exp10')));

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const mongoUrl = "mongodb://localhost:27017/";
const dbName = "mydatabase";
let db;

MongoClient.connect(mongoUrl)
    .then((client) => {
        db = client.db(dbName);
        console.log(`Connected to MongoDB: ${dbName}`);
        
        app.listen(port, () => {
            console.log(`Server running at http://localhost:${port}`);
        });
    })
    .catch((err) => {
        console.error("Error connecting to MongoDB:", err);
        process.exit(1);
    });

app.post("/signup", async (req, res) => {
    const { email, pass } = req.body;
    if (!db) {
        res.status(500).send("Database not initialized");
        return;
    }
    try {
        await db.collection("items").insertOne({ email, pass });
        console.log("User inserted successfully");
        res.redirect("/signin");
    } catch (err) {
        console.error("Error inserting user data:", err);
        res.status(500).send("Failed to sign up");
    }
});

app.post("/login", async (req, res) => {
    const { email, pass } = req.body;
    if (!db) {
        res.status(500).send("Database not initialized");
        return;
    }
    try {
        if (await db.collection("items").findOne({ email, pass })) {
            console.log("User authenticated successfully");
            res.status(200).send("Login successful");
        } else {
            console.log("Authentication failed");
            res.status(401).send("Login failed");
        }
    } catch (err) {
        console.error("Error during authentication:", err);
        res.status(500).send("Failed to login");
    }
});

// Serve the React app
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'exp10', 'index.html'));
});
