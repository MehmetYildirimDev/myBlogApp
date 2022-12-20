const express = require('express'),
      router  = express.Router();

router.get("/", (req,res)=>{

res.send("test ediyoruz"); 

})
      module.exports = router;

