const User = require("../model/User");
const jwt = require('jsonwebtoken');
const CONFIG = require('../config/config');

const UserController = {
    async register(req, res){
        try {
            const user = await User.create(req.body);
            res.send({user, message: 'User succesfully created'});
        } catch (error) {
            console.error(error);
            res.status(500).send({message: "There was a problem trying to register the user", error});
        }
    },
    async getUser(req, res){
        try {
            const user = await User.findOne({email: req.params.email});
            res.send(user);
        } catch (error) {
            console.error(error);
            res.status(500).send({message: "There was a problem trying to get the user", error});
        }
    },
    async getAll(req, res){
        try {
            const users = await User.find();
            res.send(users);
        } catch (error) {
            console.error(error);
            res.status(500).send({message: "There was a problem trying to get all users", error});
        }
    },
    async update(req, res){
        try {
            const user = await User.findOneAndUpdate({email: req.params.email}, req.body, {new: true});
            res.send({user, message: 'User succesfully updated'});
        } catch (error) {
            console.error(error);
            res.status(500).send({message: "There was a problem trying to update the user", error});
        }
    },
    async delete(req, res){
        try {
            const user = await User.findOneAndDelete({email: req.params.email});
            res.send({message: 'User succesfully delete'});
        } catch (error) {
            console.error(error);
            res.status(500).send({message: "There was a problem trying to delete the user", error});
        }
    },
    async login(req, res){
        try {
            const user = await User.findOne({email:req.body.email});
            if(!user){
                res.send({message: 'El usuario no existe en la base de datos'});
            }else {
                const isMatch = await user.isValidPassword(req.body.password);
                if(!isMatch){
                    res.send({message: 'La contraseña es incorrecta'});
                }else{
                    payload = {
                        email: user.email,
                    }
                    jwt.sign(payload, CONFIG.TOKEN_SECRET, function(error, token){
                        if(error){
                            res.status(500).send({error})
                        }res.send({message: 'Sesión iniciada correctamente', user, token});
                    }) 
                }
            }    
        } catch (error) {
            console.error(error);
            res.status(500).send({message:'There was a problem trying to login the user', error});
        }
    }
}

module.exports = UserController;