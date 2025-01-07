import express from "express";
import cors from "cors";
import authRoutes from "./kaduRoute/authRoutes.js";
import crudRoute from "./kaduRoute/crudRoute.js";
import env from "dotenv";
env.config();
const app = express();
const port = process.env.PORT||3000;
app.use(express.json());
app.use(cors())
app.use(express.urlencoded({ extended: true }));
app.use("/auth",authRoutes);
app.use("/api",crudRoute);

app.listen(port, () => {
  console.log(`The server is running on port ${port}`);
});
