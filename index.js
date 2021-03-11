const express = require('express');
const app = express();

const path = require('path')

app.listen(3000, () => {
    console.log('Running at Port 3000...');
});

console.log(__filename);
console.log(__dirname);

app.use(express.json());

//app.use(express.static(path.join(__dirname, 'public')))
//app.use(express.static('public'))
// app.get('/', (req, res, next) => {
//     res.send('ルートだよ！');
// });

// app.get('/hoge/fuga', (req, res, next) => {
//     res.send('ほげふが');
// });

// app.get('/get/', (req, res, next) => {
//     res.json({ message: `This is a pen.` });
// });

// app.get(/a/, function (req, res) {
//     res.send('/a/')
// })

app.get('/ab*cd/', (req, res, next) => {
    res.send(req.path)
})

app.get('/users/:userId/books/:bookId', function (req, res) {
    res.send(req.params)
})

app.use((req, res) => {
    res.sendStatus(404);
});
