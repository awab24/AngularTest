const express = require('express');
const path = require('path');
const app = express();

// Serve static files from the dist directory
app.use(express.static(path.join(__dirname, 'dist/my-angular-app')));

// Send all requests to index.html
app.get('/*', (req, res) =>
    res.sendFile('index.html', {root: 'dist/my-angular-app/'}),
);

// Start the app by listening on the default Heroku port
app.listen(process.env.PORT || 8080);
