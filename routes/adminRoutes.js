const express = require('express'),
      User    = require('../models/usersModel'),
      passport= require("passport"),
      router  = express.Router();



let adminActions = [

      {
            actionId:1,
            actionName:"changeHomeImage",
            displayName:"Chane Home Page Header Image",
      },
      {
            actionId:2,
            actionName:"changeAboutImage",
            displayName:"Chane About Page Header Image",

      },
      {
            actionId:3,
            actionName:"changeAboutText",
            displayName:"Chane About  Text",

      },
      {
            actionId:4,
            actionName:"addNewBlog",
            displayName:"Add New Blog",

      },
      {
            actionId:5,
            actionName:"ListAllBlogs",
            displayName:"List All Blogs",

      }
];
      
router.get("/admin", (req,res) =>{
      res.render("admin/admin", {adminActions:adminActions});
});


router.get("/signin", (req,res)=>{
      res.render("admin/signin");     
})

router.post("/signin", passport.authenticate(("local",
{
      successRedirect:"/",
      failureRedirect:"/signin"
}
)),(req, res)=>{});

router.get("/signup", (req,res)=>{
    res.render("admin/signup");     
})



router.post("/signup", (req,res)=>{
      console.log(req.body.name);
      let newUSer = new User({username: req.body.username }) 
      User.register(newUSer, req.body.password, (err, user)=>{
            if(err){
                  console.log(err);
                  res.redirect("/signup");
                  console.log("hata");
            }
            passport.authenticate("local")(req,res, ()=>{
                  res.redirect("/"); 
            });
      })
})

router.get("/signout", (req, res)=>{
      req.logOut();
      res.redirect("/");
})


      module.exports = router;


