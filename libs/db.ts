import mongoose from "mongoose";

const connectMongoDB = async () => {
  try {
    await mongoose.connect(process.env.DB_URI || "");
    console.log("DB CONNECTED");
  } catch (e) {
    console.log(e);
  }
};

export default connectMongoDB;
