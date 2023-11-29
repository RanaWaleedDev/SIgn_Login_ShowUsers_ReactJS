const mongoose = require('mongoose')
// Employee=user
const UserSchema = new mongoose.Schema({
    username: String,
    email: String,
    password: String
})

const UserModel = mongoose.model("users", UserSchema)
module.exports = UserModel;