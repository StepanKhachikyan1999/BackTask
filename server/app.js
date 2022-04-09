const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const helmet = require("helmet");
const compression = require("compression");
const cors = require("cors");
require("dotenv").config();

const app = express();

// middleware
app.use(cookieParser());
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(helmet());
app.use(compression());

// routes
const valueRouter = require("./routes/paymentsRouter");
app.use('/pay',valueRouter)

// server
const port = process.env.PORT || 8000;

function start() {
    try {
        mongoose
            .connect(process.env.DATABASE, {
                useNewUrlParser: true,
                useUnifiedTopology: true,
            })

        app.listen(port, () => {
            console.log('server')
        });
    } catch (e) {
        console.log(e);
    }
}
start();