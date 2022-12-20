const mongoose = require("mongoose"),
    express = require("express"),
    app = express();

//Routes
const indexRoutes = require("./routes/indexRoutes");


//appConfig
app.set('view engine', 'ejs');
app.use(express.static('public'));

//routes using 
app.use(indexRoutes);

const server = app.listen(3000, (err) => {
    if (err){
        console.log(err);
    }
    console.log('app started. Port number : %d',server.address().port);
    

    

})