// /backend/data.js
const mongoose = require("mongoose");
Schema = mongoose.Schema


const itemsSchema = new Schema ({
    itemID: String,
    timeAdded: {type: Date, default: Date.now},
    cost: Number,
})



const Carts = new Schema({
    CartId: {
        type: String,
        require: true
},
    items: [itemsSchema],
    email: String,
    total: Number,
    dateOpened: { type: Date, default: Date.now },
});




module.exports = mongoose.model("Carts", Carts);