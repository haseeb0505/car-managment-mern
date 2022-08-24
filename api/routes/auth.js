const router = require('express').Router();
const User = require("../model/User");
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
var nodemailer = require('nodemailer');
const { generatePassword } = require('../utils/generatePassword');




// register user
router.post("/register", async (req, res) => {

    let pass = generatePassword(); //generation random password
    let transporter = nodemailer.createTransport({
        host: "smtp.ethereal.email",
        port: 587,
        secure: false, // true for 465, false for other ports
        auth: {
            user: "lulu.kreiger12@ethereal.email", //  ethereal user
            pass: "6azyJnKd4HZGy5BymT", //  ethereal password
        },
    });
    const saltRounds = 10;
    const hash = await bcrypt.hash(pass, saltRounds); // for pass encryption 
    const newUser = new User({
        username: req.body.username,
        email: req.body.email,
        password: hash
    })

    try {
        let info = await transporter.sendMail({
            from: 'testingNode121@gmail.com', // sender address
            to: req.body.email, // list of receiver
            subject: "successfull signup ", // Subject line
            html: `Hello <b> ${req.body.username} </b> you have successfully logged in  using <b> ${req.body.email} </b>and your password is <b> ${pass}</b>`,

        });

        let response = await newUser.save();
        res.status(200).send(response)

    } catch (error) {
        res.status(500).json(error);
    }

})


// login 
router.post("/login", async (req, res) => {
    const email = req.body.email;
    const password = req.body.password;
    try {
        // check if email exist 
        const user = await User.findOne({ email: email });
        if (!user) {
            res.status(400).json({ message: "User not found" });
        } else {
            // comparing pass 
            const match = await bcrypt.compare(password, user.password);
            if (match) {
                // creating accessToken
                const accessToken = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: "3d" });

                let { password, ...info } = user._doc;

                res.status(200).json({ message: "Login success", data: { ...info, accessToken } });
            } else {
                res.status(400).json({ message: "Password not match" });
            }
        }
    } catch (error) {
        res.status(500).json(error);
    }

})

module.exports = router;