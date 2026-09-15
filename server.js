import express from "express";
import connectDB from "./config/db.js";
import taskRoutes from "./routes/task.routes.js";
import cors from "cors";

const app = express();

const PORT = process.env.PORT || 5000;

await connectDB();

app.use(
  cors({
     origin: "https://task-manager-next-pied.vercel.app",
  }),
);

app.use(express.json());

app.get("/", (req, res) => {
  res.json({
    message: "Task API is running",
  });
});

app.use("/api/tasks", taskRoutes);


app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});