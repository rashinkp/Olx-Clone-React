const express = require("express");
const cors = require("cors");

const User = require("./Schemas/user");
const connection = require("./db");

const app = express();

app.use(express.json());
app.use(cors());

app.post("/signup", async (req, res) => {
  try {
    const { name, email, password } = req.body;
    const isUserExists = await User.find({ email });

    if (isUserExists.length === 0) {
      const newUser = new User({ name, email, password });
      await newUser.save();

      res
        .status(201)
        .json({ message: "User created successfully", user: newUser });
    } else {
      res.status(500).json({ message: "User already exists, please signin" });
    }
  } catch (err) {
    res
      .status(500)
      .json({ message: "Error in user signup", error: err.message });
  }
});

app.post('/signin', async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    
    if (user) {
      if (user.password === password) {
        res.status(201).json({message:'User authentication successful', user:user})
      } else {
        res
          .status(500)
          .json({ message: "password missmatch"});
      }
    } else {
      res.status(500).json({ message: "user not found" });
    }
  } catch (err) {
     res.status(500).json({ message: "Error in user signin", error: err.message });
  }
})

app.listen(5000, () => {
  console.log("Port 5000 is open now");
});
