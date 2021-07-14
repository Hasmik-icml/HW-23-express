const express = require('express');
const app = express();
 app.get('/myData', (req, res) => {
   res.send({myName: 'Hasmik'});
 });
 app.get('/myData1', (req, res) => {
   res.send({myLastName: 'Gevorgyan'});
 });
 app.get('/myData2', (req, res) => {
   res.send({myAge: '38'});
 });
 app.listen(3000, () =>{
   console.log('ok');
 });
