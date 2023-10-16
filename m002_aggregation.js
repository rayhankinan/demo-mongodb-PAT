db.reviews.aggregate([
    // Stage 1: Filter reviews by name
    {
        $match: { reviewer: "Emile T" }
    },
    // Stage 2: Group remaining reviews by name and average the rating
    {
        $group: {
            _id: "$reviewer",
            average: {
                $avg: "$rating"
            }
        }
    },
]);