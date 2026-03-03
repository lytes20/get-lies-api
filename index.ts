import app from "./src/app";
import { connectToMongoDB } from "./src/db";

async function main() {
  await connectToMongoDB();
  const PORT = process.env.PORT || 3030;
  app.listen(PORT, () => {
    console.log(`Server started listening on port ${PORT}`);
    console.log("http://127.0.01:3030/");
  });
}

main();
