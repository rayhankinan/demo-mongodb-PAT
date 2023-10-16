// Find all movies where some of the element of boxOffice where the country field is Germany and the revenue is greater than 228 million.
// NOTE: 
// in a query such as the one below, the two elements specified in the
// filter DO NOT need to match in the same array element:
// one filter could match document x and the other could match in document y
// so the query below would match our boxOffice array even though there is no 
// single document where the country is Germany AND the revenue is greater than 228
db.movieDetails.find({ "boxOffice.country": "Germany", "boxOffice.revenue": { $gt: 228 } });

// Find all movies where some of the element of boxOffice where the country field is Germany and the revenue is greater than 228 million.
// NOTE: 
// in a query such as the one below, the two elements specified in the
// filter DO need to match in the same array element
db.movieDetails.find({ boxOffice: { $elemMatch: { "country": "Germany", "revenue": { $gt: 228 } } } });
