var express  = require('express');
var app      = express();  
console.log('JE lance le serveur')

 
app.use(express.static('www'));
app.set('port', process.env.PORT || 5000);
app.listen(app.get('port'), function () {
  console.log('Express server listening on port ' + app.get('port'));
});