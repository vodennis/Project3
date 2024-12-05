import { Pool } from "pg";
import { Container } from "typedi";

export default async () => {
  try {
    const pool = new Pool({
      user: "postgres",
      host: "localhost",
      database: "postgres",
      port: parseInt(process.env.DB_PORT || "5432"),
    });

    // Register the pool in the container
    Container.set("pool", pool);

    return pool;
  } catch (error) {
    console.error("Error connecting to PostgreSQL:", error);
    throw error;
  }
};