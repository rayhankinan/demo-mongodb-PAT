// Find all movies that match /^Won.*/i regex.
db.movieDetails.find({ "awards.text": { $regex: /^Won.* / } }, { _id: 0, title: 1, "awards.text": 1 });
