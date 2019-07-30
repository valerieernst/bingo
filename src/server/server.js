const express = require('express');
const bodyParser = require('body-parser');

const board = {
    squares: [
        ['test1', false],
        ['test2', false],
        ['test3', false],
        ['test4', false],
        ['test5', false],
        ['test6', false],
        ['test7', false],
        ['test8', false],
        ['test9', false],
        ['test10', false],
        ['test11', false],
        ['test12', false],
        ['test13', false],
        ['test14', false],
        ['test15', false],
        ['test16', false],
    ],
}

const app = express();
app.use(bodyParser.urlencoded({ extended: false }));

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*"); // update to match the domain you will make the request from
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });

app.get('/api/greeting', (req, res) => {
  const name = req.query.name || 'World';
  res.setHeader('Content-Type', 'application/json');
  res.send(JSON.stringify({ greeting: `Hello ${name}!` }));
});

app.get('/api/board', (req, res) => {
    res.setHeader('Content-Type', 'application/json');
    res.send(JSON.stringify({ board: board }));
})

app.listen(8080, () =>
  console.log('Express server is running on localhost:8080')
);