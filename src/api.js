import * as express from 'express';

import * as service from './service.js';

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

app.get('/', (req, res) => {
    return res.send('You! Shall not! Pass!');
});

app.get('/api/v2/maths/time', (req, res) => {
    const result = service.time();
    return res.json({
        result
    });
});

app.post('/api/v2/maths/addition', (req, res) => {
    const { body } = req;
    const result = service.addition(body.a, body.b);
    return res.json({
        result
    });
});

app.post('/api/v2/maths/subtraction', (req, res) => {
    const { body } = req;
    const result = service.subtraction(body.a, body.b);
    return res.json({
        result
    });
});

app.listen(port, () => {
    console.log(`App listening on port: ${port}`);
});
