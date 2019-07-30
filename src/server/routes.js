const express = require('express');

const apiRouter = express.Router();

apiRouter.get('*', (req, res) => {
    const warning = `Invalid API endpoint: '/ops-gw-api${req.url}' OR incorrect request method (e.g. POST, PUT, GET, etc.).`;

    logger('warning')(warning);

    res.status(404).send(warning);
});

