const mongoose = require("mongoose");
const { composeWirhMongoose } = require("graphql-compose-mongoose");
const Schema = mongoose.Schema;

const User = new Schema(
    {
    email: String,
    identificacion: String,
    fullName: String,
    password: String,
    userType: String,
    state: String
    },
    {timestamps:true}
);

module.exports = {
    UserShema: mongoose.model("users", User),
    UserTC: composeWirhMongoose(mongoose.model("users", User))
}