const {SchemaComposer} = require("graphql-compose");

const schemaComposer = new SchemaComposer();

const {UserQuery, UserMutation} = require("./user");
const {InscriptionQuery, InscriptionMutation} = require("./inscription");
const {ProjectQuery, ProjectMutation} = require("./project")

schemaComposer.Query.addFields({
    ...UserQuery,
    ...InscriptionQuery,
    ...ProjectQuery
});

schemaComposer.Mutation.addFields({
    ...UserMutation,
    ...InscriptionMutation,
    ...ProjectMutation
});

module.exports = schemaComposer.buildSchema();