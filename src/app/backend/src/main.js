const express = require('express');
const crypto = require('crypto'); // For hashing
const path = require('path');
const fs = require('fs');
const app = express();
const port = 3000;

let batSignalStatus = false; // Bat-signal is off by default

// Pre-computed hash for "JimGordan"
const VALID_HASH = crypto.createHash('sha256').update("JimGordan").digest('hex');

// Middleware to parse JSON
app.use(express.json());

// Default route explaining the API
app.get('/', (req, res) => {
    res.json({
        message: "Welcome to the Batman API! Use /batsignal to check Bat-signal status or /batsignal to toggle Bat-signal.",
        endpoints: {
            "GET /batsignal": "Check if the Bat-signal is ON or OFF.",
            "POST /batsignal": "Toggle the Bat-signal ON or OFF. Requires a valid 'key' in the request body.",
            "GET /batsignal/photo": "Get a random Batman photo if the Bat-signal is ON. Requires a valid 'key' in the query string."
        }
    });
});

// GET route to check Bat-signal status
app.get('/batsignal', (req, res) => {
    if (batSignalStatus) {
        res.json({ status: "ON", message: "The Bat-signal is shining brightly!" });
    } else {
        res.json({ status: "OFF", message: "The Bat-signal is currently off." });
    }
});

// POST route to toggle Bat-signal
app.post('/batsignal', (req, res) => {
    const { action, key } = req.body;

    // Validate hashed key
    if (!key || crypto.createHash('sha256').update(key).digest('hex') !== VALID_HASH) {
        return res.status(403).json({ success: false, message: "Access denied. Only Commissioner Gordon can activate the Bat-signal!" });
    }

    // Toggle Bat-signal
    if (action === 'ON') {
        batSignalStatus = true;
        res.json({ success: true, message: "The Bat-signal is now ON. Batman is on his way!" });
    } else if (action === 'OFF') {
        batSignalStatus = false;
        res.json({ success: true, message: "The Bat-signal is now OFF. Gotham is safe... for now." });
    } else {
        res.status(400).json({ success: false, message: "Invalid action. Use 'ON' or 'OFF'." });
    }
});

// GET route to fetch a random Batman photo
app.get('/batsignal/photo', (req, res) => {
    const { key } = req.query;

    // Validate hashed key
    if (!key || crypto.createHash('sha256').update(key).digest('hex') !== VALID_HASH) {
        return res.status(403).json({ success: false, message: "Access denied. Only Commissioner Gordon can view this page!" });
    }

    if (!batSignalStatus) {
        return res.status(400).json({ success: false, message: "The Bat-signal is OFF. No Batman to show!" });
    }

    
     // Get a random photo from the `images` directory
     const imagesDir = path.join(__dirname, '../assets/');
     const files = fs.readdirSync(imagesDir).filter(file =>
        file.endsWith('.jpg') || file.endsWith('.jpeg') || file.endsWith('.png')
    );
     if (files.length === 0) {
         return res.status(500).json({ success: false, message: "No Batman photos found!" });
     }
 
     // Ensure unique and random selection
     const uniqueFiles = [...new Set(files)];
     
     const randomPhoto = uniqueFiles[Math.floor(Math.random() * uniqueFiles.length)];

     const photoPath = path.join(imagesDir, randomPhoto);
     res.sendFile(photoPath);
});

// Start the server
app.listen(port, () => {
    console.log(`Batman API is running on http://localhost:${port}`);
});
