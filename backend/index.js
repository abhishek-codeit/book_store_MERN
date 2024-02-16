import express from "express";
import { PORT, mongoDBURL } from "./config.js";
import mongoose from "mongoose";
import { Book } from "./models/bookmodel.js";
import { router } from "./routes/bookRoutes.js";
import cors from "cors";

const app = express();

app.use(express.json());
app.use(cors());
// app.use(
//   cors({
//     orgin: "http://localhost:3000",
//     methods: ["GET", "PUT", "POST", "DELETE"],
//     allowedHeaders: ["content-type"],
//   })
// );

app.use("/book",router );

mongoose
  .connect(mongoDBURL)
  .then(() => {
    console.log("the database is connected");
    app.listen(PORT, () => {
      console.log("the server is setup and listening...");
    });
  })
  .catch((error) => {
    console.log(error);
  });
