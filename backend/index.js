const express = require("express");
const app = express();
const dotenv = require("dotenv");
const connection = require("./src/db/db");
const bodyParser = require('body-parser');

const AuthRoutes = require('./src/routes/AuthRouter');



const PORT = process.env.PORT || 5000;

dotenv.config();
connection();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/api/auth', AuthRoutes);

app.listen(PORT, () => {
    console.log(`Server is running port number ${PORT}`);
});