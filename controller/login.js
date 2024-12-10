import bcrypt from "bcrypt";
import env from "dotenv";
env.config();
export const loginAdmin = async (req, res) => {
  try {
    const { username, password } = req.body;
    if (username !== process.env.USERID)
      return res.status(401).json({ message: "Invalid Username" });
    const isValidPassword = bcrypt.compareSync(password,process.env.PASSWORD);
    if (isValidPassword)
      return res.status(200).json({ message: "Login Successfull" });
    else return res.status(401).json({ message: "Invalid Password" });
  } catch (error) {
    res.status(500).json({ message: "Server not responding" });
  }
};
