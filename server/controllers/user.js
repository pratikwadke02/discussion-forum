import UserModal from "../models/user.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

export const signin = async (req, res) => {
    const { email, password } = req.body;

    try {
        const oldUser = await UserModal.findOne({ email });

        if (!oldUser) return res.status(404).json({ message: "User doesn't exist" });

        const isPasswordCorrect = await bcrypt.compare(password, oldUser.password);

        if (!isPasswordCorrect) return res.status(400).json({ message: "Invalid credentials" });

        const token = jwt.sign({ email: oldUser.email, id: oldUser._id }, 'test', { expiresIn: "1h" });

        res.status(200).json({ result: oldUser, token });
    } catch (err) {
        console.log(err);
        res.status(500).json({ message: "Something went wrong" });
    }
};

export const signuphere = async (req, res) => {
    const { email, password, confirmPassword, username } = req.body;
  
    try {
        console.log(req.body);
      const oldUser = await UserModal.findOne({ email });
  
      if (oldUser) return res.status(400).json({ message: "User already exists" });
      if(password!==confirmPassword) return res.status(400).json({ message: "Password Dosent Match" });
  
      const hashedPassword = await bcrypt.hash(password, 12);
  
      const result = await UserModal.create({ email, password: hashedPassword, username: username});
  
      const token = jwt.sign( { email: result.email, id: result._id }, 'test', { expiresIn: "1h" } );
  
      res.status(201).json({ result, token });
    } catch (error) {
      res.status(500).json({ message: "Something went wrong" });
      
      console.log(error);
    }
};
