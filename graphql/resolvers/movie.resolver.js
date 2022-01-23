const Movie = require('../../models/Movie');

module.exports = {
    Query: {
        getMovies: () => {
            return Movie.find().catch(err => console.log(err));
        },
        getMovie: (parent, args) => {
            return Movie.findById(args.id).catch(err => console.log(err));
        }
    },
    Mutation: {
        createMovie: (parent, args) => {
            const newMovie = new Movie({

                
                name: args.name,
                description: args.description,
                price: args.price


            });
            return newMovie.save();
        },
        updateMovie: (parent, args) => {
            const movie = Movie.find(movie => movie.id === args.id);
            if (!movie) throw new Error('Movie not found');

            // This way, only the fields that are passed-in will be changed.
            if (typeof args.data.name === "string") movie.name = args.data.name;
            if (typeof args.data.description === "string") movie.description = args.data.description;
            if (typeof args.data.price === "double") movie.price = args.data.price;
            return movie;

            // return Movie.findByIdAndUpdate(id, { title: title, description: description, img: img, price: price });

        },
        deleteMovie: (parent, args) => {
            const movieIndex = Movie.filter((movie) => user.id !== args.id);
            if (movieIndex === -1) throw new Error('Movie not found');

            const movie = Movie.splice(movieIndex, 1);
            return movie[0];
        }
    }
}