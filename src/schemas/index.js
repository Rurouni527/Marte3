const {SchemaComposer} = require("graphql-compose");

const schemaComposer = new SchemaComposer();

const {UserQuery, UserMutation} = require("./user");
const {InscriptionQuery, InscriptionMutation} = require("./inscription");
const {ProjectQuery, ProjectMutation} = require("./project")
const {AdvanceQuery, AdvanceMutation} = require("./advance")

schemaComposer.Query.addFields({
    ...UserQuery,
    ...InscriptionQuery,
    ...ProjectQuery,
    ...AdvanceQuery
});

schemaComposer.Mutation.addFields({
    ...UserMutation,
    ...InscriptionMutation,
    ...ProjectMutation,
    ...AdvanceMutation
});

module.exports = schemaComposer.buildSchema();
