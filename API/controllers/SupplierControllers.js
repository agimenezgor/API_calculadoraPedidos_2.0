const Supplier = require("../model/Supplier");

const SupplierController = {
    async register(req, res){
        try {
            const supplier = await Supplier.create(req.body);
            res.send({supplier, message: 'Supplier succesfully created'});
        } catch (error) {
            console.error(error);
            res.status(500).send({message: "There was a problem trying to register the Supplier", error});
        }
    },
    async getSupplier(req, res){
        try {
            const supplier = await Supplier.findOne({number: req.params.number});
            res.send(supplier);
        } catch (error) {
            console.error(error);
            res.status(500).send({message: "There was a problem trying to get the supplier", error});
        }
    },
    async getAll(req, res){
        try {
            const suppliers = await Supplier.find();
            res.send(suppliers);
        } catch (error) {
            console.error(error);
            res.status(500).send({message: "There was a problem trying to get all suppliers", error});
        }
    },
    async update(req, res){
        try {
            const supplier = await Supplier.findOneAndUpdate({number: req.params.number}, req.body, {new: true});
            res.send({supplier, message: 'Supplier succesfully updated'});
        } catch (error) {
            console.error(error);
            res.status(500).send({message: "There was a problem trying to update the supplier", error});
        }
    },
    async delete(req, res){
        try {
            const supplier = await Supplier.findOneAndDelete({number: req.params.number});
            res.send({message: 'Supplier succesfully delete'});
        } catch (error) {
            console.error(error);
            res.status(500).send({message: "There was a problem trying to delete the supplier", error});
        }
    }
}

module.exports = SupplierController;