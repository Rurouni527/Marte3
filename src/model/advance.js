const mongoose = require("mongoose");
const {composeWithMongoose} = require("graphql-compose-mongoose");
const Schema = mongoose.Schema;

const Advance = new Schema(
    {
        idProyecto: String,
        idEstudiante: String,
        fecha: Date,
        descripcion: String,
        observaciones: String
    },
    {timestamps: {createdAt:true, updatedAt:true}}
)



module.exports = {
    Advance: mongoose.model("Advance", Advance),
    AdvanceTC: composeWithMongoose(mongoose.model("Advance", Advance))
}
