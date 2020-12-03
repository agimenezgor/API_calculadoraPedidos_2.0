const mongoose = require('mongoose');

const SupplierSchema = new mongoose.Schema({
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
        type: number,
        required: [true, 'La cantidad de días que tardan en servir es necesaria'],
    },
    money: {
        type: number,
        default: 0
    },
    minPalets: {
        type: number,
        default: 0
    },
    maxPalets: {
        type: number,
        default: 0
    },
    minKilos: {
        type: number,
        default: 0
    },
    maxKilos: {
        type: number,
        default: 0
    }
});

const Supplier = mongoose.model('Supplier', SupplierSchema);
module.exports = Supplier;