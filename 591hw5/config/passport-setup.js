const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20');
const User=require('../user-model')

passport.serializeUser((user,done) =>{
    done(null,user.id);
} )
passport.deserializeUser((id,done)=>{
    User.findById(id).then((user)=>{
        done(null,user);
    });
});

passport.use(
    new GoogleStrategy({

    callbackURL:'/auth/google/redirect',
    clientID:'258436370093-fekddvonehcrqhp6i0ni698mo1q7u2i2.apps.googleusercontent.com',
    clientSecret:'k6flrYLOLS_Tis6S44snKSPh'
}, (accessToken,refreshToken,profile,done) => {

        console.log(profile);
        User.findOne({googleid:profile.id}).then((currentUser)=>{
            if (currentUser){
                console.log('have current user');
                done(null,currentUser);
            }else{
                new User({
                    username:profile.displayName,
                    googleid:profile.id
                }).save().then((newuser)=>{
                    console.log('new user');
                    done(null,newuser);
                });

            }
        })






}));
