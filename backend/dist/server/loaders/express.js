"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const cors_1 = __importDefault(require("cors"));
const body_parser_1 = __importDefault(require("body-parser"));
const cookie_parser_1 = __importDefault(require("cookie-parser"));
const routes_1 = __importDefault(require("../api/routes"));
exports.default = ({ app }) => {
    // Configure CORS with specific options
    app.use((0, cors_1.default)());
    // Handle preflight requests
    app.options('*', (0, cors_1.default)({ credentials: true, origin: true }));
    // flexibility on PUT POST DELETE calls
    app.use(require("method-override")());
    // Increase payload limit if needed
    app.use(body_parser_1.default.json({ limit: '10mb' }));
    app.use(body_parser_1.default.urlencoded({ extended: true, limit: '10mb' }));
    // Configure cookie parser with options if needed
    app.use((0, cookie_parser_1.default)());
    // ALL API
    app.use((0, routes_1.default)());
};
