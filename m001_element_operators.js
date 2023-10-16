// Find all movies that have defined genres (null or value).
db.movieDetails.find({ rated: { $exists: true } });

// Find all movies that have undefined genres.
db.movieDetails.find({ rated: { $exists: false } });

// Find all movies that have defined genres and are null.
db.movieDetails.find({ rated: null });