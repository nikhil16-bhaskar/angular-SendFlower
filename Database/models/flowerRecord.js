const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const RecordSchema = new Schema({
    name:
    {
        type: String,
    },

    address:
    {
        type: String,
    },

    quantity:
    {
        type: Number,
    },
    date:
    {
        type : String,
    },
    id:
    {
        type: String,
    }
});

const flowerData = mongoose.model('record', RecordSchema);

module.exports = flowerData; 