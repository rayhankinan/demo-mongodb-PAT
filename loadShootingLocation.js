db = db.getSiblingDB("video");
db.shootingLocations.drop();
db.shootingLocations.insertMany([
    {"name": "Buckingham Palace", "location": {"type": "Point", "coordinates": [-0.141587, 51.501364]}, "films": ["The King's Speech", "The Queen"]},
    {"name": "Westminster Abbey", "location": {"type": "Point", "coordinates": [-0.128075, 51.499403]}, "films": ["The King's Speech", "Four Weddings and a Funeral"]},
    {"name": "St Bartholomew's Hospital", "location": {"type": "Point", "coordinates": [-0.101594, 51.518838]}, "films": ["Four Weddings and a Funeral"]},
    {"name": "St Paul's Cathedral", "location": {"type": "Point", "coordinates": [-0.098683, 51.513845]}, "films": ["Harry Potter and the Prisoner of Azkaban"]},
    {"name": "Tower Bridge", "location": {"type": "Point", "coordinates": [-0.075712, 51.505498]}, "films": ["Bridget Jones's Diary", "Harry Potter and the Prisoner of Azkaban"]},
    {"name": "Trafalgar Square", "location": {"type": "Point", "coordinates": [-0.127695, 51.507797]}, "films": ["Harry Potter and the Prisoner of Azkaban"]},
]);

db.collection.createIndex({ location: "2dsphere" });
