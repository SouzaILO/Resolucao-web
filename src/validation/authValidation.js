import { check } from "express-validator";

let validateRegister = [
    check("email", "Invalid email").isEmail().trim(),

    check("senha", "Invalid password. Password must be at least 2 chars long")
    .isLength({ min: 2 }),

    check("passwordConfirmation", "Password confirmation does not match password")
    .custom((value, { req }) => {
        return value === req.body.senha
    })
];

let validateLogin = [
    //check("usuario", "Invalid email").isEmail().trim(),

    check("senha", "Invalid password")
    .not().isEmpty()
];

export default {
    validateRegister: validateRegister,
    validateLogin: validateLogin
}; 