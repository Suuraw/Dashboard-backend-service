import bcrypt from "bcrypt";
import env from "dotenv";
import jwt from "jsonwebtoken";
env.config();
export const loginAdmin = async (req, res) => {
  try {
    const { username, password } = req.body;
    if (username !== process.env.USERID) {
      return res.status(401).json({ message: "Invalid Username" });
    }

    const isValidPassword = bcrypt.compareSync(password, process.env.PASSWORD);
    if (!isValidPassword) {
      return res.status(401).json({ message: "Invalid Password" });
    }

    const token = jwt.sign(
      { username: process.env.USERID },
      process.env.JWT_SECRET,
      { expiresIn: "1h" }
    );
    return res.status(200).json({ message: "Login Successful", token });
  } catch (error) {
    console.error("Error occurred:", error); // Log specific error details
    res.status(500).json({ message: "Server not responding" });
  }
};
