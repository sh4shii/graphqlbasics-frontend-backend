import { UserList, MovieList } from "../FakeData.js";

const resolvers = {
  User: {
    friends: (parent, args, context) => {
      const friendsIds = (parent.friends || []).map((user) => user.id);
      const friends = UserList.filter((user) => friendsIds.includes(user.id));
      return friends;
    },
    favoriteMovies: () => {
      return MovieList.filter(
        (movie) => movie.year >= 2000 && movie.year <= 2040
      );
    },
  },

  Query: {
    // USER RESOLVERS
    users: () => {
      return UserList;
    },
    user: (parent, args) => {
      const userId = parseInt(args.id);
      const user = UserList.find((user) => parseInt(user.id) === userId);
      return user;
    },

    // MOVIE RESOLVERS
    movies: () => {
      return MovieList;
    },
    movie: (parent, args) => {
      const  MovieTitle  = args.title;
      const foundMovie =  MovieList.find((movie) => movie.title === MovieTitle);
      return foundMovie
    },
  },

  Mutation: {
    createUser: (parent, args) => {
      const user = args.input;
      const lastId = UserList[UserList.length - 1].id;
      user.id = lastId + 1;
      UserList.push(user);
      return user;
    },

    updateUsername: (parent, args) => {
      const { id, newUsername } = args.input;
      let userUpdated;
      UserList.forEach((user) => {
        if (user.id === Number(id)) {
          user.username = newUsername;
          userUpdated = user;
        }
      });

      return userUpdated;
    },

    deleteUser: (parent, args) => {
      const idToDelete = Number(args.id);
      const updatedUserList = UserList.filter((user) => user.id !== idToDelete);
      return null;
    },
  },
};

export { resolvers };
