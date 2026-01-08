import { connect } from "mongoose";
import { LieModel } from "./models/Lie";
import fs from "fs/promises";
import path from "path";

async function importLies() {
  // Load environment variables
  require("dotenv").config();
  const dbUrl = process.env.MONGO_DB_URL;
  if (!dbUrl) {
    console.error("MONGO_DB_URL is not defined in your .env file.");
    process.exit(1);
  }

  // Connect to MongoDB
  await connect(dbUrl);
  console.log("Connected to MongoDB");

  // Read lies from JSON
  const liesPath = path.join(__dirname, "data", "lies.json");
  const data = JSON.parse(await fs.readFile(liesPath, "utf-8"));

  if (!Array.isArray(data.lies)) {
    console.error("Could not find lies array in lies.json");
    process.exit(1);
  }

  // Insert each lie
  for (const lie of data.lies) {
    await LieModel.create({ lie: lie.lie });
    console.log(`Inserted lie: ${lie.lie}`);
  }

  console.log("All lies inserted!");
  process.exit(0);
}

importLies().catch((err) => {
  console.error("Error importing lies:", err);
  process.exit(1);
});
