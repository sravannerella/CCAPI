// Requiring packages
var express = require('express'),
    app = express(),
    port = process.env.PORT || 8000;

app.use(express.static('views'));
app.set('view engine', 'ejs');
    
// Initializing server on given port
app.listen(port, function(){
    console.log("Server is running on port", port);
});

// Rendering main page
app.get('/', function(req, resp){
    resp.render('dashboard/index');
})

app.get('/main', function(req, resp){
    resp.render('dashboard/main/index');
})