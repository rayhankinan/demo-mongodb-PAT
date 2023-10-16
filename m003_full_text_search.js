db.reviews.find(
    {
        $text: {
            $search: "great",
            $language: "english",
            $caseSensitive: false,
            $diacriticSensitive: false
        } 
    }
);

db.movieDetails.find(
    {
        $text: {
            $search: "great",
            $language: "english",
            $caseSensitive: false,
            $diacriticSensitive: false
        }
    }
)