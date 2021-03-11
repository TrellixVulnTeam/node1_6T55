const express = require('express');
const app = express();
const request = require('request');

const path = require('path')

const TEST_DOMAIN = 'https://www.google.com/?hl=ja';

app.listen(3000, () => {
    console.log('Running at Port 3000...');
});

console.log(__filename);
console.log(__dirname);

app.use(express.json());

//app.use(express.static(path.join(__dirname, 'public')))
app.use(express.static('public'))
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

app.get('/th', (req, res) => {

    request(TEST_DOMAIN + req.originalUrl)
        // 成功時
        .on('response', (response) => {
            console.log(response.statusCode);
            console.log(response.headers['content-type']);
        })
        // 失敗時
        .on('error', function (err) {
            console.log(err);
            res.sendStatus(404);
        })
        .pipe(res);
});

app.get('/nuko/:width/:height', (req, res) => {
    // 送受信の設定
    const options = {
        url: 'http://placekitten.com/' + `${req.params.width}/${req.params.height}`,
        method: 'GET',
        encoding: null
    };

    request(options, (err, response, body) => {
        res.set('Content-Type', response.headers['content-type']);
        res.send(body);
    });
});

app.get('/ab*cd/', (req, res, next) => {
    res.send(req.path)
})

app.get('/users/:userId/books/:bookId', function (req, res) {
    res.send(req.params)
})

app.use((req, res) => {
    res.sendStatus(404);
});
