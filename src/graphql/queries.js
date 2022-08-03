const { UserType, PostType } = require("./types");
const { User, Post } = require("../models");
const { GraphQLList, GraphQLID, GraphQLString } = require("graphql");

const users = {
  type: new GraphQLList(UserType),
  description: "Query all the users in the database",
  resolve(parent, args) {
    return User.find();
  },
};

const posts = {
  type: new GraphQLList(PostType),
  description: "Query all the posts in the database",
  resolve(parent, args) {
    return Post.find();
  },
};

const user = {
  type: UserType,
  description: "Query a user by their ID",
  args: {
    id: { type: GraphQLID },
  },
  resolve(parent, args) {
    return User.findById(args.id);
  },
};

const post = {
  type: PostType,
  description: "Query a post by its ID",
  args: {
    id: { type: GraphQLID },
  },
  resolve(parent, args) {
    return Post.findById(args.id);
  },
};

module.exports = {
  users,
  user,
  posts,
  post,
};
