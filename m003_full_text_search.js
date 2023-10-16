// Find all text reviews that contain the word "great"
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

// Find all movie details that contain the word "great"
db.movieDetails.find(
    {
        $text: {
            $search: "great",
            $language: "english",
            $caseSensitive: false,
            $diacriticSensitive: false
        }
    }
);