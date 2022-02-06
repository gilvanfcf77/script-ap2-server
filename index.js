const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const cors = require('cors');

const app = express();

app.use(morgan('dev'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());

app.get('/', (req, res) => {
    return res.sendFile('src/index.html', { root: __dirname });
})

app.get('/sum', (req, res) => {
    console.log(req.query);
    const result = parseInt(req.query.value) + 2
    return res.json(result);

})

app.listen(5000, () => console.log('Express inciado na porta 5000 - http://localhost:5000'));