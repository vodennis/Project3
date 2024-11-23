import { Application } from "express";

export default function loaders({ app }: { app: Application }) {
  app.get("/status", (req, res) => {
    res.status(200).end();
  });
}
