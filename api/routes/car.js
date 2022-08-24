const Car = require('../model/Car');
const { verifyToken } = require('../utils/verifyToken');
const router = require('express').Router();


// Create car
router.post("/", verifyToken, async (req, res) => {

    const newCar = new Car(req.body)
    try {
        let savedCar = await newCar.save();
        res.status(201).json(savedCar);
    } catch (error) {
        res.status(500).json(error);
    }
})


// update car
router.put("/:id", verifyToken, async (req, res) => {

    try {
        const response = await Car.findByIdAndUpdate(req.params.id, { $set: req.body }, { new: true })
        console.log(response)
        res.status(200).json(response);

    } catch (error) {
        res.status(500).json(error);
    }
})


// delete car
router.delete("/:id", verifyToken, async (req, res) => {
    try {
        await Car.findByIdAndDelete(req.params.id);
        res.status(200).json({ message: "car deleted" });
    } catch (error) {
        res.status(500).json(error);
    }

})

// get car 
router.get("/find/:id", verifyToken, async (req, res) => {
    try {
        let car = await Car.findById(req.params.id);
        res.status(200).json(car);
    } catch (error) {
        res.status(500).json(error);
    }


})




// get all 
router.get("/", verifyToken, async (req, res) => {
    let cat = req.query.cat;
    let latest = req.query.new;
    let cars;
    try {
        if (latest) {
            cars = await Car.find().sort({ _id: -1 }).limit(5)
        } else {
            cars = cat ? await Car.find({ categoryId: cat }) : await Car.find();
        }

        res.status(200).json(cars);
    } catch (error) {
        res.status(500).json(error);
    }

})

router.get("/count/:id", verifyToken, async (req, res) => {
    try {

        let Totalcars = await Car.countDocuments();
        let yourCars = await Car.find({ ownerId: req.params.id }).count()
        res.status(200).json({
            totalCars: Totalcars,
            yourCars: yourCars
        });
    } catch (error) {
        res.status(500).json(error);
    }
})

// get user stats
router.get("/stats", verifyToken, async (req, res) => {
    const date = new Date();
    const lastYear = new Date(date.setFullYear(date.getFullYear() - 1));
    try {
        const stats = await Car.aggregate([
            {
                $match: {
                    createdAt: { $gte: lastYear }
                }
            }, {
                $project: {
                    month: { $month: "$createdAt" }
                }
            }, {
                $group: {
                    _id: "$month",
                    total: { $sum: 1 }
                }
            }
        ]);

        res.status(200).json(stats);

    } catch (error) {
        res.status(500).json(error);
    }

})





module.exports = router;