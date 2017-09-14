"use-strict"
var jwt =require('jsonwebtoken');
require('dotenv').config();

function authentikasi(req,res,next) {
    var token = req.headers.token
    if (token != null) {
      jwt.verify(token,process.env.SECRET,(err,decoded)=> {
        console.log(decoded);
        if (decoded.username) {
          return next()
        }else {
          res.status(500).send('not authorized')
        }
      })
    }
    else {
      res.send("Please Login")
    }

 }

module.exports ={authentikasi} ;
