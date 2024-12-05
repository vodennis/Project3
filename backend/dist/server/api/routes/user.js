"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const route = (0, express_1.Router)();
exports.default = (app) => {
    app.use("/user");
    route.get("/", (req, res) => {
        console.log("HELLO PLS SO MANY FILES STOP");
    });
};
