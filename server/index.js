const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const cors = require("cors");
const app = express();
const port = process.env.PORT || 5000;
const routes = require("./routes/BrandSalesDaily");

mongoose.set("strictQuery", false);
mongoose.connect("mongodb://localhost/brand_sales_daily", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }).then(() => console.log("MongoDB connected"))
    .catch((err) => console.log(err));

app.use(bodyParser.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());
app.use("/", routes);

app.listen(port, () => console.log(`Server listening on port ${port}`));
