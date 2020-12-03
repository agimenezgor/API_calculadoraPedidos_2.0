const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'El nombre es necesario']
    },
    email: {
        type: String,
        required: [true, 'La email es necesaria'],
        unique: true
    },
    password: {
        type: String,
        required: [true, 'La contraseña es necesaria'],
        minlength: [8, 'La contraseña debe tener 8 caracteres como mínimo']
    },
}, {
    toJSON:{
        transform:function(doc, ret){
            delete ret.password;
            return ret;
        }
    }
});

const User = mongoose.model('User', UserSchema);
module.exports = User;