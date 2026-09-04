import express from "express";
import cors from "cors";
import productRoutes from "./routes/productRoutes.js";

const app = express();
app.use(express.json());
app.use(cors({
  origin: process.env.CORS_ORIGIN || "http://localhost:3001",
  credentials: true
}));

app.get("/", (req, res) => {
  res.json({ status: "ok", message: "Dynamic Product Page API is running" });
});

app.use("/api/products", productRoutes);

app.use((req, res) => {
  res.status(404).json({ message: "Route not found" });
});

export default app;
