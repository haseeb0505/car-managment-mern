const Category = require('../model/Category');
const { verifyToken } = require('../utils/verifyToken');
const router = require('express').Router();


// Create category
router.post("/", verifyToken, async (req, res) => {

    const newCat = new Category(req.body)
    try {
        let savedCat = await newCat.save();
        res.status(201).json(savedCat);
    } catch (error) {
        res.status(500).json(error);
    }
})


// update category
router.put("/:id", verifyToken, async (req, res) => {

    try {
        const response = await Category.findByIdAndUpdate(req.params.id, { $set: req.body }, { new: true });
        res.status(200).json(response);

    } catch (error) {
        res.status(500).json(error);
    }
})


// delete category
router.delete("/:id", verifyToken, async (req, res) => {
    try {
        await Category.findByIdAndDelete(req.params.id);
        res.status(200).json({ message: "category deleted" });
    } catch (error) {
        res.status(500).json(error);
    }

})





// get all 
router.get("/", verifyToken, async (req, res) => {

    try {
        let cars = await Category.find();
        res.status(200).json(cars);
    } catch (error) {
        res.status(500).json(error);
    }


})





module.exports = router;