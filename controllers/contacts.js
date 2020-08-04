const express = require('express');
const router = express.Router();
const contactModel = require('../models/Contact');


router.get('/', async (req, res) => {
    try {
        const allcontacts = await contactModel.find();
        res.status(200).json(allcontacts);
    } catch (error) {
        res.status(500).json({ message: error });

    }
});
router.get('/:id', async (req, res) => {
    try {
        const contact = await contactModel.findById(req.params.id);
        res.status(200).json(contact);
    } catch (error) {
        res.status(500).json({ message: "not found" });

    }
});
router.post('/', async (req, res) => {

    const contact = new contactModel(req.body);
    console.log(contact);
    try {
        await contact.save();
        res.status(200).json(contact);

    } catch (error) {
        res.status(500).json({ message: "unable to insert" });
    }

});

router.put('/:id', async (req, res) => {
    const contact = await contactModel.findById(req.params.id);
    contact.set(req.body);
    try {
        await contact.save();
        res.status(200).json(contact);

    } catch (error) {
        res.status(500).json({ message: "unable to update" });
    }
});
router.delete('/:id', async (req, res) => {
    try {
        const contact = await contactModel.findByIdAndDelete(req.params.id); // efficient
        res.status(200).json(contact);
    } catch (error) {
        res.status(500).json({ message: "unable to delete" });

    }
});

module.exports = router;