const mongoose = require('mongoose');


const userSchema = mongoose.Schema({
    name: {
        type: String,
        maxlength: 50
    },
    email: {
        type: String,
        trim: true, //jae ha@naver.com <- 공백 제거
        uniqueL 1
    },
    pasword: {
        type: String,
        minlength:5
    },
    lastname: {
        type: String,
        maxlength: 50
    },
    role: {
        type: Number,
        default: 0
    },
    image: String,
    token: {
        type: String
    },
    tokenExp: {
        type: Number //토큰 유효기간
    }
})

const User = mongoose.model('User',userSchema)

module.exports = {User}