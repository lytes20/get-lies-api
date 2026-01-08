import "dotenv/config";
import express from "express";
import cors from "cors";
import LiesRouter from "./routes/lies";
import { connectToMongoDB } from "./db";
import { errorHandler, routerNotFoundHandler } from "./utils/common";
import liesController from "./controllers/lies";

const app = express();

app.use(cors());
app.use(express.json());
app.use("/", liesController.getLies);

app.use(routerNotFoundHandler);
app.use(errorHandler);

async function main() {
  await connectToMongoDB();
  const PORT = process.env.PORT || 3030;
  app.listen(PORT, () => {
    console.log(`Server started listening on port ${PORT}`);
    console.log("http://127.0.01:3030/");
  });
}

main();
