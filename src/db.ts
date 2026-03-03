import mongoose from 'mongoose';
export async function connectToMongoDB(): Promise<void> {
  try {
    const mongoUrl = process.env.MONGO_DB_URL;
    if (!mongoUrl) {
      throw new Error('MONGO_DB_URL environment variable is not defined');
    }
    await mongoose.connect(mongoUrl);
    console.log('DB connected successfully');
  } catch (error) {
    console.error('Error connecting to the db');
    console.error('Error -> ', error);
  }
}
