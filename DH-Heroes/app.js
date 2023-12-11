const express = require('express');
const path = require('path');

const app = express();
const port = 3030;

const createPath = (filename) => path.join(__dirname, `./views/${filename}.html`);

const newPage = (pagename, filename) => app.get(`/${pagename}`, (req, res) => res.sendFile(createPath(filename)));

app.use(express.static('public'));

newPage("", "index");
newPage("babbage", "babbage");
newPage("berners-lee", "berners-lee");
newPage("clarke", "clarke");
newPage("hamilton", "hamilton");
newPage("hopper", "hopper");
newPage("lovelace", "lovelace");
newPage("turing", "turing");

app.listen(port, () => console.log(`http://localhost:${port}`));
