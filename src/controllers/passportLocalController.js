import passportLocal from "passport-local";
import passport from "passport";
import loginService from "../services/loginServices.js";

let LocalStrategy = passportLocal.Strategy;

let initPassportLocal = () => {
    passport.use(new LocalStrategy({
            usernameField: 'usuario',
            passwordField: 'senha',
            passReqToCallback: true
        },
        async (req, usuario, senha, done) => {
            try {
                
                await loginService.findUserByEmail(usuario).then(async (user) => {
                    
                    if (!user) {
                        return done(null, false, req.flash("errors", `This user usuario "${usuario}" doesn't exist`));
                    }
                    if (user) {
                        //console.log("user" , user);
                        let match = await loginService.comparePassword(senha, user);
                        
                        if (match === true) {
                            return done(null, user, null)
                        } else {
                            return done(null, false, req.flash("errors", match)
                            )
                        }
                    }
                });
            } catch (err) {
                console.log(err);
                return done(null, false, { message: err });
            }
        }));

};

passport.serializeUser((user, done) => {
    done(null, user.ID);
});

passport.deserializeUser((id, done) => {
    loginService.findUserById(id).then((user) => {
        return done(null, user);
    }).catch(error => {
        return done(error, null)
    });
});

module.exports = initPassportLocal;