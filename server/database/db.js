import mongoose from "mongoose";

const Connection = async ({ username, password }) => {
  const URL = `mongodb+srv://${username}:${password}@cluster0.exilf.mongodb.net/FLIPKARTCLONE?retryWrites=true&w=majority`;
  try {
    await mongoose.connect(URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Database connected successfully");
  } catch (error) {
    console.log("error connecting to database", error);
  }
};

export default Connection;
