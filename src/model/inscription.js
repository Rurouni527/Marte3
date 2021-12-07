const mongoose = require("mongoose");
const {composeWithMongoose} = require("graphql-compose-mongoose");
const Schema = mongoose.Schema;

const Inscription = new Schema(
    {
        idProject: String,
        idStudent: String,
        state: String
    },
    {timestamps:true}
)

module.exports = {
    InscriptionSchema: mongoose.model("inscriptions", Inscription),
    InscriptionTC: composeWithMongoose(mongoose.model("inscriptions", Inscription))
}