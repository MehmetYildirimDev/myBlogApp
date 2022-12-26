const mongoose      =    require("mongoose"),
    express         =    require("express"),
    passport        =    require("passport"),
    LocalStragety   =    require("passport-local"),
    User            =    require("./models/usersModel"),
    expressSession  =    require("express-session"),
    bodyParser      =    require("body-parser"),
    app             =    express();

    app.use(bodyParser.urlencoded({extended : true}));

    //passport config
app.use(require("express-session")({
    secret:"bu bizim guvenlik cumlemiz",
    resave:false,
    saveUninitialized: false,

}));




//Routes
const indexRoutes = require("./routes/indexRoutes");
      adminRoutes = require("./routes/adminRoutes");
      blogRoutes = require("./routes/blogRoutes");

      
app.set('view engine', 'ejs');
app.use(express.static('public'));

//appConfig
mongoose.set("strictQuery", false);
mongoose.connect('mongodb://127.0.0.1:27017/myapp').then(() => {
    console.log("Connected to Database");
}).catch((err) => {
    console.log("Not Connected to Database ERROR! ", err);
});



app.use((req, res, next)=>{
    res.locals.currentUser=req.user;
    next();
})



app.use(passport.initialize());
app.use(passport.session());
passport.use(User.createStrategy());
passport.use(new LocalStragety(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

//routes using 
app.use(indexRoutes);
app.use(adminRoutes);
app.use(blogRoutes);



const server = app.listen(3000, (err) => {
    if (err){
        console.log(err);
    }


    
    console.log('app started. Port number : %d',server.address().port);
    

    

})