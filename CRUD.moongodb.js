// CREATE
var food = [
    {
        name: "Musfiras Briyani center",
        price: 30,
    },
    {
        name: "Karhai",
        price: 49.99,
    },
    {
        name: "Korndog",
        price: 79.99,
    }
];

db.insertMany(food)

//READ

db.food.find({price: 49.99})

//UPDATE
db.food.updateOne({price:49.99}, {$set: {price: 50.3}})
//DELETE

db.food.deleteOne({price:50.3})
