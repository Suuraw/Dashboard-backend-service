import express from "express";
import cors from "cors";
import bodyParser from "body-parser";

const app = express();
const port = 3000;
const admin = {
  username: "Sujay@gmail.com",
  password: "12345",
};
app.use(express.json());
app.use(cors());
app.use(bodyParser.urlencoded({extended:true}))
app.post("/login", (req, res) => {
  const { email, password } = req.body;
  console.log(password)
  if(password===admin.password)
  return res.status(200).json({ message: "Login Successfull" });
  else
  return res.status(401).json({message:"Login failed"});
});
app.listen(port, () => {
  console.log(`The server is running on port ${port}`);
});
