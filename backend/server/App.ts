import express from "express";
import loaders from "../loaders";

export async function startServer() {
  const app = express();
  await loaders({ app });

  app.listen(5000, (err?: unknown) => {
    if (err) {
      console.log(err);
      process.exit(1);
    }
    console.log("server has started");
  });
}

startServer()