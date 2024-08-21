import mongoose from "mongoose";
import validator from "validator";

const authSchema = new mongoose.Schema({
    username: {type: String, required: true, unique: true, maxlength: 100},
    email: {type: String, required: true, unique: true, validate: (mail) => validator.isEmail(mail)},
    password: {type: String, required: true, unique: true, minlength: 6},
    fullname: {type: String, required: true,maxlength: 100},
}, {timestamps: true});


const Auth = new mongoose.model('Auth', authSchema);


export default Auth;