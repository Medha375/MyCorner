import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";
import postRoutes from "./routes/postRoutes.js";

dotenv.config();
const app= express();
app.use(express.json());
app.use(cors());

app.use("/api/posts", postRoutes);

const PORT= process.env.PORT|| 5000;
mongoose.connect(process.env.MONGO_URI)
 .then(() => app.listen(PORT, () => console.log(`Server running on ${PORT}`)))
  .catch((err) => console.log(err));