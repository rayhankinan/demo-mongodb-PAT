// Find all movies that have comedy, crime, and drama as genres.
db.movieDetails.find({ genres: { $all: ["Comedy", "Crime", "Drama"] } }, { _id: 0, title: 1, genres: 1 });

// Find all movies that included comedy, crime, or drama as genres.
db.movieDetails.find({ genres: { $in: ["Comedy", "Crime", "Drama"] } });
