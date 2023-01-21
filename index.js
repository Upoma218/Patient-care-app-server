const express = require('express');
const cors = require('cors');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;

// middleware
app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
    res.send('Patient care app is running now on port 5000');
});

app.listen(port, () => {
    console.log(`Patient care app is running on the ${port}`);
})