show dbs 
use harryKart
show collections 

db.items.find()
db.items.updateOne({name: "Moto30s"}, {$set: {price: 2}})
db.items.find()
db.items.updateMany({name: "Moto30s"}, {$set: {price: 3, rating: 1}})