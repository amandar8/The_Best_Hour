// 'use strict';

// const express = require('express');
// const router = express.Router();
// const bcrypt = require('bcrypt');
// const knex = require('../knex');
// const saltRounds = 10;

// router.get('/users', (req, res) => {
//   knex('users')
//   .then((data) => {
//     res.render('user', {data:data[0]});
//   })
// });

// router.get('/', function(req, res, next){
//   knex('users').then(function(data){
//       res.render('user',{data:data});
//       console.log('users')
//   }).catch(next);
// });

// router.post('/', function(req, res, next){
//     knex('users').insert({username:req.body.username, password:req.body.password}).then(function(data){
//         res.redirect('/users')
//     }).catch(next);
// });

// router.post('/auth', function(req, res, next){
//   knex('users').select('username','password').where({username:req.body.username}).then(function(data){
//     console.log(data);
//     if(data.length === 1){
//       if(req.body.password === data[0].password){
//           res.render('auth',{err:undefined, username:data[0].username, password:data[0].password})
//       }else{
//         res.render('auth',{err:'Password does not match record'});
//       }
//     }
//     else{
//       res.render('auth',{err:'User does not exist'});
//     }
//   }).catch(next);
// })

// router.post('/delete/:id', function(req, res, next){
//   knex('users').where('id', req.params.id).delete().then(function(data){
//     res.redirect('/user');
//   }).catch(function(err){
//     res.redirect('/user');
//   })
// })

// module.exports = router;