"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const ingredient_1 = __importDefault(require("./ingredient"));
exports.default = () => {
    const app = (0, express_1.Router)();
    (0, ingredient_1.default)(app);
    return app;
};
