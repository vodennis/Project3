"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.startServer = startServer;
const express_1 = __importDefault(require("express"));
const loaders_1 = __importDefault(require("../loaders"));
async function startServer() {
    const app = (0, express_1.default)();
    await (0, loaders_1.default)({ app });
    app.listen(5000, (err) => {
        if (err) {
            console.log(err);
            process.exit(1);
        }
        console.log("server has started");
    });
}
startServer();
