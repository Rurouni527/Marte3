const express = require("express");
const app = express();
const mongoose = require("mongoose");
const { graphqlHTTP } = require("express-graphql");

//const logger = require("./core/logger");

const extensions = ({ context }) => {
    return {
        runTime: Date.now() - context.startTime,
    };
};


//app.use(logger);

app.listen(5000, async () => {
    console.log("server is running ", 5000);
    await mongoose.connect("mongodb+srv://marte3:12345@cluster0.jc5s6.mongodb.net/Administrar_proyectos?retryWrites=true&w=majority", {

        useNewUrlParser: true,
        useUnifiedTopology: true,
    });
});

mongoose.connection.on(
    "error",
    console.error.bind(console, "MongoDB connection error:")
);
const graphqlSchema = require("./schemas/index");
app.use(
    "/graphql",
    graphqlHTTP((request) => {
        return {
            context: { startTime: Date.now() },
            graphiql: true,
            schema: graphqlSchema,
            extensions,
        };
    })
);