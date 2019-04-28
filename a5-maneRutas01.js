var express = require('express');
var app = express();

app.all('/secret', function(req, res, next) {
  console.log('Accediendo a la seccion secreta ...');
  next(); // pasa el control al siguiente manejador
});
