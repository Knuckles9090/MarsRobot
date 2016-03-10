module.exports = function(app) {

  app.all('/*', function ( req, res ) {
    res
        .status( 200 )
        .set( { 'content-type': 'text/html; charset=utf-8' } )
        .sendFile('index.html', {root: __dirname + "/../" + 'dist/client'});
  });

};