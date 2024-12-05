"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const pg_1 = require("pg");
const typedi_1 = require("typedi");
exports.default = async () => {
    try {
        const pool = new pg_1.Pool({
            user: "postgres",
            host: "localhost",
            database: "postgres",
            port: parseInt(process.env.DB_PORT || "5432"),
        });
        // Register the pool in the container
        typedi_1.Container.set("pool", pool);
        return pool;
    }
    catch (error) {
        console.error("Error connecting to PostgreSQL:", error);
        throw error;
    }
};
