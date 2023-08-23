const express = require("express");
const UserModel = require("./Models/User");
const mongoose = require("mongoose");
const cors = require("cors")

const app = express();

app.listen(9000, ()=> console.log("server running"))

app.use(express.json())

app.use(cors());

mongoose.connect("mongodb://127.0.0.1:27017/data" );

app.post("/Login", async (req, res) => {
    const user = req.body;
    try {
      let check = await UserModel.findOne({
        username: user.username,
        password: user.password
      });
  
      if (check) {
        res.send({users : check, islogged : true});
      } else {
        res.send({islogged : false})
      }
    } catch (err) {
      console.log(err);
    }
  });

  app.post("/Users", async (req, res) => {
    const user = req.body;
    try {
      let verify = await UserModel.findOne({
        username: user?.username
      });
  
      if (verify) {
        res.send({error : true});
      } else {
        const newuser = new UserModel(user);
  
        let save = await newuser.save();
        
        if (save) {
          res.send("user inserted");
        } else {
          res.send("not inserted");
        }
      }
    } catch (err) {
      console.log(err);
    }
  });