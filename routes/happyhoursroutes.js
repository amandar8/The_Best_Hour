'use strict';

const knex = require('../knex');
const express = require('express');
const router = express.Router();


router.get('/happyhours', (req, res, next) => {
    knex('happyhours')
        .orderBy('id')
        .then((happyhours) => {
            // res.render('happyhours', {data:happyhours});
            res.send(happyhours);
        })
        .catch((err) => {
            next(err);
        });
});

router.get('/happyhours/:id', (req, res, next) => {
    knex('happyhours')
        .where('id', req.params.id)
        .first()
        .then((happyhours) => {
            if (!happyhours) {
                return next();
            }
            res.send(happyhours);
        })
        .catch((err) => {
            next(err);
        });
});

router.post('/happyhours', (req, res, next) => {
    knex('happyhours')
        .insert({
            restaurant_name: req.body.restaurant_name,
            location: req.body.location,
            days: req.body.days,
            hours: req.body.hours,
            specials: req.body.specials,
            website: req.body.website
        }, '*')
        .then((happyhours) => {
            res.send(happyhours[0]);
        })
        .catch((err) => {
            next(err);
        });
});

router.patch('/happyhours/:id', (req, res, next) => {
    knex('happyhours')
        .where('id', req.params.id)
        .first()
        .then((happyhour) => {
            if (!happyhour) {
                return next();
            }

            return knex('happyhours')
                .update({
                  restaurant_name: req.body.restaurant_name,
                  location: req.body.location,
                  days: req.body.days,
                  hours: req.body.hours,
                  specials: req.body.specials,
                  website: req.body.website
                }, '*')
                .where('id', req.params.id);
        })
        .then((happyhours) => {
            res.send(happyhours[0]);
        })
        .catch((err) => {
            next(err);
        });
});

router.delete('/happyhours/:id', (req, res, next) => {
    let happyhour;

    knex('happyhours')
        .where('id', req.params.id)
        .first()
        .then((row) => {
            if (!row) {
                return next();
            }

            happyhour = row;

            return knex('happyhours')
                .del()
                .where('id', req.params.id);
        })
        .then(() => {
            delete happyhour.id;
            res.send(happyhour);
        })
        .catch((err) => {
            next(err);
        });
});

module.exports = router;