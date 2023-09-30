const LocalStrategy = require('passport-local').Strategy

function initialize(passport , getUserByUsername){

    const authUser = async (usuario, senha, done) => {
        const user = getUserByUsername(usuario)

        if (user == null){
            return done(null, false, { message: 'Esse usuário não existe'})
        }
        
        if (await bcrypt.compare(senha, user.senha)){
            return done(null, user)
        } else {
            return done(null, false, { message: 'Senha incorreta'})
        }
        

    }
    passport.use(new LocalStrategy({ usernameField: 'usuario' }),
    authUser)
    passport.serializeUser((user, done) => {  })
    passport.deserializeUser((id, done) => {  })

}
module.exports = initialize