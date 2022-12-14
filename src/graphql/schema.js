

const {GraphQLObjectType, GraphQLSchema} = require("graphql")

const queries = require("./queries")

const QueryType = new GraphQLObjectType({ 
    name: "QueryType", 
    description: "queries", 
    fields: queries, 
})

module.exports = new GraphQLSchema({ 
    query:QueryType
})