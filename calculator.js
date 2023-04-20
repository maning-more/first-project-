const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

app.post('/', (req, res) => {
  const operand1 = parseInt(req.body.operand1);
  const operand2 = parseInt(req.body.operand2);
  const operator = req.body.operator;
  let result;

  switch (operator) {
    case 'add':
      result = operand1 + operand2;
      break;
    case 'subtract':
      result = operand1 - operand2;
      break;
    case 'multiply':
      result = operand1 * operand2;
      break;
    case 'divide':
      result = operand1 / operand2;
      break;
  }

  res.send(`Result: ${result}`);
});

app.listen(8085, () => {
  console.log('Server started on port 8085');
});
