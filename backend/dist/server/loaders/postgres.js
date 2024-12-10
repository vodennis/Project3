"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const pg_1 = require("pg");
const typedi_1 = require("typedi");
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
exports.default = async () => {
    try {
        const pool = new pg_1.Pool({
            connectionString: process.env.DATABASE_URL,
            ssl: {
                rejectUnauthorized: false,
            },
        });
        // Set the search path to public after connecting the pool
        await pool.query('SET search_path TO public');
        typedi_1.Container.set("pool", pool);
        console.log("Connected to PostgreSQL (Supabase) database successfully.");
        return pool;
    }
    catch (error) {
        console.error("Error connecting to PostgreSQL:", error);
        throw error;
    }
};
