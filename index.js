import { log } from "console";
import express from "express";
import path from "path";

// PATH
import indexRoute from "./src/routes/index.route.js";
import modelCardsRoute from "./src/routes/model-cars.route.js";
import presidentFounderRoute from "./src/routes/president-founder.route.js";
import sparePartsRoute from "./src/routes/spare-parts.route.js";
// PATH CARS
import novaRoute from "./src/routes/nova.route.js";
import stellarRoute from "./src/routes/stellar.route.js";
import angelRoute from "./src/routes/angel.route.js";

const app = express();

app.set("view engine", "pug");
app.set("views", path.join("views"));

app.use(express.static(path.join("./public")));

// GET
app.use(indexRoute);
app.use(modelCardsRoute);
app.use(presidentFounderRoute);
app.use(sparePartsRoute);
app.use(novaRoute);
app.use(stellarRoute);
app.use(angelRoute);

const PORT = 3000;

app.listen(PORT, () => {
  console.log("Server listing in PORT:3000");
});
