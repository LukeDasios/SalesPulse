import express from "express";
import bodyParser from "body-parser";
import icecreamFlavoursRoutes from "./routes/icecreamflavours.js";

const app = express();
app.use(bodyParser.json());
app.use("/icecreamflavours", icecreamFlavoursRoutes);

app.listen(3000, () => console.log("Server running on localhost:3000"));
