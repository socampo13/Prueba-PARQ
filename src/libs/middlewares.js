const express = require('express');

module.exports = app => {
    app.set('port', process.env.PORT || 3000);
    app.set('json spaces', 8);

    app.use(express.json());
    app.use((req, res, next) => {
        next();
    });
};