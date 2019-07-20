const express = require('express');
const router = express.Router();

router.get('/',(req,res)=>{
    res.render('./index.ejs');
});

router.get('/signUp',(req,res)=>{
    res.render('./signUp.ejs');
});
router.get('/editor', (req, res) => {
    res.render('./editor.ejs');
})

module.exports = router;
