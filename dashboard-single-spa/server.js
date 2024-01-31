const express = require('express');
const cors = require('cors');

const path = require('path');
const app = express();

const corsOptions = {
  origin: 'https://micro-frontend-gateway.uc.r.appspot.com',
  optionsSuccessStatus: 200 // For legacy browsers
};

app.use(cors(corsOptions));

// Serve static files from the 'dist' directory
app.use(express.static('dist'));

// Handle every other route with index.html, which will contain
// a script tag to your application's JavaScript bundle.
app.get('/*', function (req, res) {
  res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
