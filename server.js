// const express = require("express");
// const bodyParser = require("body-parser");
// const mongoose = require("mongoose");
// const bcrypt = require("bcrypt");
// const cors = require("cors");
// const jwt = require("jsonwebtoken");
// const User = require("./models/User");

// mongoose
//   .connect(
//     "mongodb+srv://user:123@shekhao.bfh2b.mongodb.net/myFirstDatabase?retryWrites=true&w=majority",
//     {
//       useNewUrlParser: true,
//       useUnifiedTopology: true,
//     }
//   )
//   .then(() => console.log("Connection Successful"))
//   .catch((err) => console.log(err));

// const app = express();
// app.use(cors());
// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: false }));

// //routes
// app.post("/studentsignup", (req, res) => {
//   const newUser = new User({
//     fullname: req.body.fullname,
//     username: req.body.username,
//     email: req.body.email,
//     password: bcrypt.hashSync(req.body.password, 10),
//     confirmpassword: bcrypt.hashSync(req.body.password, 10),
//     phone: req.body.phone,
//     alternatephone: req.body.alternatephone,
//   });
//   newUser.save((err) => {
//     if (err) {
//       console.log("worksssssss");
//       return res.status(400).json({
//         title: "error",
//         error: "email in use",
//       });
//     }

//     return res.status(200).json({
//       title: "signup success",
//     });
//   });
// });
// app.post("/login", (req, res) => {
//   User.findOne({ username: req.body.username }, (err, user) => {
//     if (err)
//       return res.status(500).json({
//         title: "server error",
//         error: err,
//       });
//     if (!user) {
//       return res.status(401).json({
//         title: "user not found",
//         error: "invalid credentials",
//       });
//     }
//     //incorrect password
//     if (!bcrypt.compareSync(req.body.password, user.password)) {
//       return res.status(401).json({
//         tite: "login failed",
//         error: "invalid credentials",
//       });
//     }
//     //IF ALL IS GOOD create a token and send to frontend
//     let token = jwt.sign({ userId: user._id }, "secretkey");
//     return res.status(200).json({
//       title: "login sucess",
//       token: token,
//     });
//   });
// });

// //grabbing user info
// app.get("/user", (req, res) => {
//   let token = req.headers.token; //token
//   jwt.verify(token, "secretkey", (err, decoded) => {
//     if (err)
//       return res.status(401).json({
//         title: "unauthorized",
//       });
//     //token is valid
//     User.findOne({ _id: decoded.userId }, (err, user) => {
//       if (err) return console.log(err);
//       return res.status(200).json({
//         title: "user grabbed",
//         user: {
//           email: user.email,
//           username: user.username,
//         },
//       });
//     });
//   });
// });
// // const port = process.env.PORT || 5000;

// // app.listen(port, (err) => {
// //   if (err) return console.log(err);
// //   console.log("server running on port " + port);
// //});
