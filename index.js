const express = require('express');
const app = express();

const path = require('path')

app.listen(3000, () => {
    console.log('Running at Port 3000...');
});

console.log(__filename);
console.log(__dirname);

//app.use(express.static(path.join(__dirname, 'public')))
app.use(express.static('public'))

app.use((req, res) => {
    res.sendStatus(404);
});
