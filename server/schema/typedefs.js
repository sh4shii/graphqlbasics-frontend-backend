const typeDefs = `
  type User {
    id: ID!
    name: String!
    username: String!
    age: Int!
    nationality: Nationality!
    friends: [User]
    favoriteMovies: [Movie]
  }

  type Movie {
    id: ID!
    title: String!
    year: String!
    runtime: String!
    genres: [String!]!
    director: String!
    actors: String!
    plot: String!
    posterUrl: String!
  }

  type Query {
    users: [User!]!
    user(id: ID!): User!
    movies: [Movie!]!
    movie(title: String!): Movie!
  }

  input CreateUserInput {
    name: String!
    username: String!
    age: Int!
    nationality: Nationality = INDIA
  }

  input UpdateUsernameInput {
    id: ID!
    newUsername: String!
  }

  type Mutation {
    createUser(input: CreateUserInput!): User
    updateUsername(input: UpdateUsernameInput!): User
    deleteUser(id: ID!): User
  }

  enum Nationality {
    INDIA
    CANADA
    BRAZIL
    GERMANY
    CHILE
    UKRAINE
  }
`;

export { typeDefs };
