var express = require('express');
var router = express.Router();
const passport = require('passport');


router.get('/login',(req,res)=>{
    res.render('login');
});


router.get('/logout',(rep,res)=>{
    res.send('logging out');
});

router.get('/google',passport.authenticate('google',{
    scope:['profile']
}));
router.get('/google/redirect',passport.authenticate('google'),(req,res)=>{
    res.send('BOSTON WEATHER!')
});

module.exports = router;
