const mongoose = require("mongoose");
const {composeWithMongoose} = require("graphql-compose-mongoose");

const Schema = mongoose.Schema;

const Project = new Schema(
    {
        name:String,
        generalObjectives:[String],
        specificObjectives:[String],
        butget: String,
        startDate: Date,
        endDate:Date,
        leader: {
            id:String,
        },
        state: String,
        phase:String
    }
)

module.exports = {
    ProjectSchema: mongoose.model("projects", Project),
    ProjectTC: composeWithMongoose(mongoose.model("projects", Project)) 
}