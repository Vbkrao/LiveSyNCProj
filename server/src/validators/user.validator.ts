import { body } from "express-validator";



class UserValidator{
    public register=[
        body("email")
        .isEmail()
        .normalizeEmail()
        .withMessage("Must provide a valid email address."),
        body("email").custom(async(value)=>{
            const user=await userService.findUserByEmail(value);
            if(user){
                return Promise.reject("User with email already exists.");
    
            }
            return true;
        }),
        body("email")
    ]
}