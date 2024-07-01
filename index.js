const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");
const endpointRoutes = require('./routes/index');
const port = 3000;

app.use(
  cors({
    origin: "*",
    methods: "GET,POST",
    credentials: true,
  })
);
app.use(bodyParser.json({ limit: "150mb" }));
app.use(bodyParser.urlencoded({ limit: "150mb", extended: true }));
app.use('/', endpointRoutes);
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
