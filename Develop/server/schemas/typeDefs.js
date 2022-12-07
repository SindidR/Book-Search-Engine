const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type User {
    _id: ID!
    username: String!
    email: String!
    password: String
    savedBooks: [Book]
    bookCount: Integer
  }

  type Book {
    authors: [String]
    description: String
    bookId: ID!
    image: String
    link: String
    title: String
  }

  type InputBook {
    authors: [String]
    description: String
    bookId: String
    image: String
    link: String
    title: String
  }

  type Auth {
    token: ID!
    user: User
  }

  type Query {
    me: User
  }

  type Mutation {
    addUser(username: String!, email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth
    addThought(newBook: InputBook!): Thought
    removeBook(bookId: ID!): Thought
  }
`;

module.exports = typeDefs;