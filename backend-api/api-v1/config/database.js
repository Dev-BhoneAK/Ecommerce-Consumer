const mongoose = require("mongoose");

exports.connect = async () => {
  try {
    const connectionString =
      process.env.MONGODB_URI || "mongodb://127.0.0.1:27017/myshop"; // use default mongoDB port and database name if env not provided
    await mongoose.connect(connectionString);
    console.log("MongoDB connected!");
  } catch (err) {
    console.log(err);
  }
};
