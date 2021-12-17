const mongoose = require("mongoose");
const {composeWithMongoose} = require("graphql-compose-mongoose");
const Schema = mongoose.Schema;

const Advance = new Schema(
    {
        idProject: String,
        idStudent: String,
        description: String,
        observations: String
    },
    {timestamps: {createdAt:true, updatedAt:true}}
)



module.exports = {
    Advance: mongoose.model("Advance", Advance),
    AdvanceTC: composeWithMongoose(mongoose.model("Advance", Advance))
}
