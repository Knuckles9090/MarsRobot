var express = require('express');
var compress = require('compression');
var app = express();

app.set('port', (process.env.PORT || 3000));
app.use(compress());
app.use(express.static('client'));

require("./routes")(app);

app.listen(app.get('port'), function () {
  console.log("Express server listening on port %d in %s mode", this.address().port, app.settings.env);
});
