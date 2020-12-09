const mongoose = require('mongoose');

const SupplierSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    name: {
        type: String,
        required: [true, 'El nombre es necesario']
    },
    number: {
        type: String,
        required: [true, 'La número de proveedor es necesario'],
        unique: true
    },
    days: {
        type: Number,
        required: [true, 'La cantidad de días que tardan en servir es necesaria'],
    },
    calculateType: {
        type: String,
        default: "Palets"
    },
    money: {
        type: Number,
        default: 0
    },
    minPalets: {
        type: Number,
        default: 0
    },
    maxPalets: {
        type: Number,
        default: 0
    },
    minKilos: {
        type: Number,
        default: 0
    },
    maxKilos: {
        type: Number,
        default: 0
    }
});

const Supplier = mongoose.model('Supplier', SupplierSchema);
module.exports = Supplier;