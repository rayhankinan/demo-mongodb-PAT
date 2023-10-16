db.reviews.aggregate([
    // Stage 1: Group remaining reviews by name and average the rating
    {
        $group: {
            _id: "$reviewer",
            average: {
                $avg: "$rating"
            }
        }
    },
    // Stage 2: Sort by average rating
    {
        $sort: {
            average: -1
        }
    }
]);