const path = require("path");
const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = process.env.PORT || 6060;

app.use(bodyParser.json());
app.use(express.static("build/static"));

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, "build", "index.html"));
});

app.listen(port, () => console.log(`Listening on port ${port}`));