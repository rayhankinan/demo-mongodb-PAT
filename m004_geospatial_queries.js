// Find all shooting locations within 5km of the specified coordinates
db.shootingLocations.find(
    {
        location: {
            $nearSphere: {
                $geometry: {
                    type: "Point", 
                    coordinates: [ -0.141587, 51.501364 ]
                },
                $maxDistance: 5000
            }
        }
    }
);
