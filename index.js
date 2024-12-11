import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import authRoutes from "./routes/authRoutes.js";
import env from "dotenv";
env.config();
const app = express();
const port = process.env.PORT||3000;
app.use(express.json());
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use("/admin",authRoutes);
app.listen(port, () => {
  console.log(`The server is running on port ${port}`);
});
