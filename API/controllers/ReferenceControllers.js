const Reference = require("../model/Reference");

const ReferenceController = {
    async register(req, res){
        try {
            const reference = await Reference.create(req.body);
            res.send({reference, message: 'Reference succesfully created'});
        } catch (error) {
            console.error(error);
            res.status(500).send({message: "There was a problem trying to register the reference", error});
        }
    },
    async getReference(req, res){
        try {
            const reference = await Reference.findOne({number: req.params.number});
            res.send(reference);
        } catch (error) {
            console.error(error);
            res.status(500).send({message: "There was a problem trying to get the reference", error});
        }
    },
    async getAll(req, res){
        try {
            const references = await Reference.find();
            res.send(references);
        } catch (error) {
            console.error(error);
            res.status(500).send({message: "There was a problem trying to get all references", error});
        }
    },
    async update(req, res){
        try {
            const reference = await Reference.findOneAndUpdate({number: req.params.number}, req.body, {new: true});
            res.send({reference, message: 'Reference succesfully updated'});
        } catch (error) {
            console.error(error);
            res.status(500).send({message: "There was a problem trying to update the reference", error});
        }
    },
    async delete(req, res){
        try {
            const reference = await Reference.findOneAndDelete({number: req.params.number});
            res.send({message: 'Reference succesfully delete'});
        } catch (error) {
            console.error(error);
            res.status(500).send({message: "There was a problem trying to delete the reference", error});
        }
    }
}

module.exports = ReferenceController;