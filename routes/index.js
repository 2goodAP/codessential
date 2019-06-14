const express = require('express');
const router = express.Router();

router.get('/',(req,res)=>{
    res.render('./landing.ejs');
});

router.get('/signUp',(req,res)=>{
    res.render('./signUp.ejs');
});

module.exports = router;