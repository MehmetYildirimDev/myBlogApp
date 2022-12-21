const mongoose      =    require("mongoose"),
    express         =    require("express"),
    passport        =    require("passport"),
    LocalStragety   =    require("passport-local"),
    User            =    require("./models/usersModel"),
    expressSession  =    require("express-session"),
    bodyParser      =    require("body-parser"),
    app             =    express();

//Routes
const indexRoutes = require("./routes/indexRoutes");
      adminRoutes = require("./routes/adminRoutes");

//appConfig
mongoose.set("strictQuery", false);
mongoose.connect("mongodb://localhost/BlogApp");
app.set('view engine', 'ejs');
app.use(express.static('public'));
app.use(bodyParser.urlencoded({extended : true}));


//passport config
app.use(require("express-session")({
    secret:"bu bizim guvenlik cumlemiz",
    resave:false,
    saveUninitialized: false,

}));

app.use(passport.initialize());
app.use(passport.session());
passport.use(new LocalStragety(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

//routes using 
app.use(indexRoutes);
app.use(adminRoutes);



const server = app.listen(3000, (err) => {
    if (err){
        console.log(err);
    }


    
    console.log('app started. Port number : %d',server.address().port);
    

    

})