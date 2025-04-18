import express from "express";
import dotenv from "dotenv";
import cors from "cors";

dotenv.config();

const app = express();

app.use(cors());
app.use(express.urlencoded());
app.use(express.json());

// Routes import
import { accountsRoute } from "./routes/accountsRoute.js";

// Routes declaration
app.get("/", (req, res) => {
  res.send("Hello world!");
});
app.use(accountsRoute);

export { app };
