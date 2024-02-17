const { GraphQLSchema, GraphQLObjectType, GraphQLString } = require("graphql");
const _ = require("lodash");

var books = [
    { title: "Name of the Wind", genre: "Fantasy", id: "1" },
    { title: "The Final Empire", genre: "Fantasy", id: "2" },
    { title: "The Long Earth", genre: "Sci-Fi", id: "3" }
]

const BookType = new GraphQLObjectType({
    name: "Book",
    fields: () => ({
        id: { type: GraphQLString },
        title: { type: GraphQLString },
        genre: { type: GraphQLString },
    })
});

const RootQuery = new GraphQLObjectType({
    name: 'RootQueryType',
    fields: {
        book: {
            type: BookType,
            args: { id: { type: GraphQLString } },
            resolve(parent, args) {
                // code to get data from db / other source
                return _.find(books, { id: args.id });
            }
        }
    }
});

module.exports = new GraphQLSchema({
    query: RootQuery
})