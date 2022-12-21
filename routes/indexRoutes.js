const express = require('express'),
      router  = express.Router();


      let data = [
            {
                  PostTitle:"Blog Baslik 1",
                  PostSubTitle:"Bu ilk blog denemesi",
                  image: "https://images.unsplash.com/photo-1661961110671-77b71b929d52?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60"
            },
            {
                  PostTitle:"Blog Baslik 2",
                  PostSubTitle:"Bu ikinci blog denemesi",
                  image: "https://images.unsplash.com/photo-1671471983193-f76687e0a4fd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw0fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60"
            },
            {
                  PostTitle:"Blog baslik 2",
                  PostSubTitle:"Bu ucuncu blog denemesi",
                  image: "https://images.unsplash.com/photo-1671519821564-be9dbc25a08e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw1fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60"
            }
      ]



router.get("/", (req,res)=>{
      res.render("home", {data : data}); 
})

router.get("/about", (req,res)=>{
      res.render("about");     
})

router.get("/contact", (req,res)=>{
      res.render("contact");     
})
router.get("/resume", (req,res)=>{
      res.render("resume");     
})

router.get("/signin", (req,res)=>{
      res.render("admin/signin");     
})
      module.exports = router;


