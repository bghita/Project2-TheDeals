require('dotenv').config();
const express = require('express');

const PORT = process.env.PORT || 5080;
const app = express();

app.use(express.urlencoded({extended: true}))
app.use(express.json())

var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

const routes = require('./routes');

app.use(routes);

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));