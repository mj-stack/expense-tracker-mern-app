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
  res.send({ name: "mukul joshi", age: 21 });
});
app.use(accountsRoute);

export { app };
