//Uses express to create server and handle requests
const express = require('express');
const path = require('path');


//File leading to web assets
const publicPath = path.join(__dirname, '..', 'public');

//Declares an express server
const app = express();

const port = process.env.PORT || 3000;

//Serves all static assests through public folder
app.use(express.static(publicPath));

//Makes sure all 404 fall back to index.html for client side routing
app.get('*', (req, res) => {
    res.sendFile(path.join(publicPath, 'index.html'));
})

//Creates port for server
app.listen(port, () => {
    console.log('Server is running!');
})
