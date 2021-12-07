const {SchemaComposer} = require("graphql-compose");

const schemaComposer = new SchemaComposer();

const {UserQuery, UserMutation} = require("./user");

const {AdvanceQuery, AdvanceMutation} = require("./advance")

schemaComposer.Query.addFields({
    ...UserQuery,
    ...AdvanceQuery
});

schemaComposer.Mutation.addFields({
    ...UserMutation,
    ...AdvanceMutation

});

module.exports = schemaComposer.buildSchema();