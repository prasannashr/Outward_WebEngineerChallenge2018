const express = require('express')
const app = express();
var path = require('path');
var bodyParser = require('body-parser');
app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies

let numberOfRequest =0;

let statusCode =200;
app.get('/', (req, res) => {
    numberOfRequest+=1;
  res.status(500).send({'counter': numberOfRequest})
});

app.get('/math', (req, res) => {
    
    res.sendFile(path.join(__dirname + '/pages/math.html'));
});
app.post('/calculate', (req, res) => {
    let val1 = parseFloat(req.body.val1);
    let val2 = parseFloat(req.body.val2);
    let result=0;
    switch(req.body.cal){
        case '+':
            result = val1 + val2;
            console.log("result: ",result);
            break;
        case '-':
            result = val1 - val2;
            break;
        case '*':
            result = val1 * val2;
            break;
        case '/':
            result = val1 / val2;        
            break;
        default:
            result=0;
    }
    
    console.log(result);
    res.status(201).send({" result ":result});
});

app.get('/game', (req, res) => {
    
    res.send('<h1>Game </h1>');
});

app.listen(8000, () => {
  console.log('Example app listening on port 8000!')
});