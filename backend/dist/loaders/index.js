"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = loaders;
function loaders({ app }) {
    app.get("/status", (req, res) => {
        res.status(200).end();
    });
}
